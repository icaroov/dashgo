import { useQuery } from 'react-query'

import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  created_at: string
}

interface GetUsersResponse {
  users: User[]
}

export const getUsers = async () => {
  const { data } = await api.get<GetUsersResponse>('/users')

  const formattedUsers: User[] = data.users.map((user: User) => {
    return {
      ...user,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return formattedUsers
}

export const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  })
}
