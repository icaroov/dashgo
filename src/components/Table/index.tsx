import {
  Box,
  Button,
  Checkbox,
  Icon,
  Table as ChakraTable,
  Link as ChakraLink,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

import { User } from '../../lib/mirage'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

interface TableProps {
  users: User[]
}

export default function Table({ users }: TableProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  const handlePrefetchUser = async (userId: number) => {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const { data } = await api.get(`/users/${userId}`)

        return data
      },
      { staleTime: 1000 * 60 * 10 } // 10 minutes
    )
  }

  return (
    <ChakraTable colorScheme='whiteAlpha'>
      <Thead>
        <Tr>
          <Th px='6' color='gray.300' width='8'>
            <Checkbox colorScheme='pink' />
          </Th>
          <Th>Usuário</Th>
          {isWideScreen && <Th>Data de Cadastro</Th>}
          <Th width='8' />
        </Tr>
      </Thead>

      <Tbody>
        {users.map(({ id, name, email, created_at }) => (
          <Tr key={id}>
            <Td>
              <Checkbox colorScheme='pink' />
            </Td>
            <Td>
              <Box>
                <ChakraLink
                  color='purple.400'
                  onMouseEnter={() => handlePrefetchUser(id)}
                >
                  <Text fontWeight='bold'>{name}</Text>
                </ChakraLink>
                <Text fontWeight='bold' color='gray.300'>
                  {email}
                </Text>
              </Box>
            </Td>
            {isWideScreen && <Td>{created_at}</Td>}
            <Td>
              {isWideScreen && (
                <Button
                  as='a'
                  size='sm'
                  fontSize='sm'
                  colorScheme='blue'
                  color='gray.50'
                  leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                >
                  Editar
                </Button>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  )
}
