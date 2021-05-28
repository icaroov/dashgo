import Head from 'next/head'
import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'

import { Pagination, Table } from '../../components'

export default function UserList() {
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

          <Button
            as='a'
            size='sm'
            fontSize='sm'
            colorScheme='pink'
            leftIcon={<Icon as={RiAddLine} fontSize='25' />}
          >
            Criar Novo
          </Button>
        </Flex>

        <Table />
        <Pagination />
      </Box>
    </>
  )
}
