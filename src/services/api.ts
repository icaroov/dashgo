import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'

import { signOut } from '../contexts/authContext'

export enum CookieKeys {
  token = '@dashgo.token',
  refreshToken = '@dashgo.refreshToken',
}

type RefreshResponse = {
  token: string
  refreshToken: string
}

type FailedRequestProps = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

let cookies = parseCookies()
let isRefreshing = false
let failedRequestsQueue = []

export const api = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies[CookieKeys.token]}`,
  },
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const isUnauthorized = error.response?.status === 401
    const isTokenExpired = error.response.data?.code === 'token.expired'

    if (isUnauthorized && isTokenExpired) {
      cookies = parseCookies()

      const oldRefreshToken = cookies[CookieKeys.refreshToken]
      const originalConfig = error.config

      if (!isRefreshing) {
        isRefreshing = true
        updateToken(oldRefreshToken)
      }

      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          onSuccess: (newToken: string) => {
            originalConfig.headers['Authorization'] = `Bearer ${newToken}`

            resolve(api(originalConfig))
          },
          onFailure: (err: AxiosError) => {
            reject(err)
          },
        })
      })
    } else {
      if (process.browser) {
        signOut()
      }
    }

    return Promise.reject(error)
  }
)

function updateToken(oldRefreshToken: string) {
  api
    .post<RefreshResponse>('/refresh', { refreshToken: oldRefreshToken })
    .then((response) => {
      const { token, refreshToken } = response.data

      configCookies(token, refreshToken)

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      redoFailedCalls(token)
    })
    .catch((error) => onErrorRequests(error))
    .finally(() => {
      isRefreshing = false
    })
}

function configCookies(token: string, refreshToken: string) {
  const config = {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  }

  setCookie(undefined, CookieKeys.token, token, config)
  setCookie(undefined, CookieKeys.refreshToken, refreshToken, config)
}

function redoFailedCalls(token?: string) {
  failedRequestsQueue.forEach((failedRequest: FailedRequestProps) => {
    failedRequest.onSuccess(token)
  })

  failedRequestsQueue = []
}

function onErrorRequests(error: any) {
  failedRequestsQueue.forEach((failedRequest: FailedRequestProps) => {
    failedRequest.onFailure(error)
  })

  failedRequestsQueue = []
}
