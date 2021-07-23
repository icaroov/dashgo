import Head from 'next/head'
import Link from 'next/link'
import { Box, Button, Flex, Heading, Icon, Spinner } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'

import { Pagination, Table } from '../../components'
import { useUsers } from '../../services/hooks/useUsers'

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers()

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>

      <Box borderRadius={8} bg='gray.800' p='8'>
        <Flex mb='8' justify='space-between' align='center'>
          <Heading size='lg' fontWeight='normal'>
            Usuários
            {!isLoading && isFetching && (
              <Spinner size='sm' color='gray.500' ml='4' />
            )}
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
            <Pagination
              totalCountOfRegisters={200}
              currentPage={2}
              onPageChange={() => {}}
            />
          </>
        )}
      </Box>
    </>
  )
}
