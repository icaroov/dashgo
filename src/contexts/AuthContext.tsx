import { createContext, useState, useEffect } from 'react'
import Router from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useToast } from '@chakra-ui/react'

import { api, CookieKeys } from '../services/api'

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

type SessionResponse = {
  permissions: string[]
  refreshToken: string
  roles: string[]
  token: string
}

type MeResponse = {
  email: string
} & SessionResponse

type SignInCredentails = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentails) => Promise<void>
  signOut: () => void
  user: User | null
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
 */
let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, CookieKeys.token)
  destroyCookie(undefined, CookieKeys.refreshToken)

  authChannel.postMessage('signout')

  Router.push('/')
}

function AuthProvider({ children }: AuthProviderProps) {
  const toast = useToast()

  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (event) => {
      if (event.data === 'signout') {
        signOut()
        return
      }
    }
  }, [])

  useEffect(() => {
    const token = parseCookies()[CookieKeys.token]

    if (token) {
      api
        .get<MeResponse>('/me')
        .then(({ data }) => {
          const { email, permissions, roles } = data

          setUser({
            email,
            permissions,
            roles,
          })
        })

        .catch(() => {
          toast({
            title: 'Error',
            description: 'Você foi desconectado ):',
            status: 'error',
            duration: 4000,
            isClosable: true,
          })

          signOut()
        })
    }
  }, [])

  const signIn = async ({ email, password }: SignInCredentails) => {
    try {
      const response = await api.post<SessionResponse>('/sessions', {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, CookieKeys.token, token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      })

      setCookie(undefined, CookieKeys.refreshToken, refreshToken, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      })

      setUser({
        email,
        permissions,
        roles,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/dashboard')

      toast({
        title: 'Sucesso',
        description: 'Seja bem vindo ao DashGo!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ops... Algo deu errado.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
