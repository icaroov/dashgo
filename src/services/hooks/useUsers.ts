import { useQuery } from 'react-query'

import { api } from '../api'

type User = {
  id: number
  name: string
  email: string
  created_at: string
}

interface GetUsersResponse {
  users: User[]
}

export const getUsers = async (currentPage: number) => {
  const { data, headers } = await api.get<GetUsersResponse>('/users', {
    params: {
      page: currentPage,
    },
  })

  const totalCount = Number(headers['x-total-count'])

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

  return {
    users: formattedUsers,
    totalCount,
  }
}

export const useUsers = (currentPage: number) => {
  return useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
