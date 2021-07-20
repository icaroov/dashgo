import Head from 'next/head'
import Link from 'next/link'
import { Box, Button, Flex, Heading, Icon, Spinner } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { useQuery } from 'react-query'

import { Pagination, Table } from '../../components'
import { User } from '../../lib/mirage'

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json()

    const formattedUsers = data.users.map((user: User) => {
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
  })

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>

      <Box borderRadius={8} bg='gray.800' p='8'>
        <Flex mb='8' justify='space-between' align='center'>
          <Heading size='lg' fontWeight='normal'>
            Usuários
          </Heading>

          <Link href='/users/create' passHref>
            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize='25' />}
              cursor='pointer'
            >
              Criar Novo
            </Button>
          </Link>
        </Flex>

        {isLoading ? (
          <Flex justifyContent='center'>
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justifyContent='center'>Falha ao carregador dados...</Flex>
        ) : (
          <>
            <Table users={data} />
            <Pagination />
          </>
        )}
      </Box>
    </>
  )
}
