import {
  Box,
  Button,
  Checkbox,
  Icon,
  Table as ChakraTable,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'

export default function Table() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

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
        <Tr>
          <Td>
            <Checkbox colorScheme='pink' />
          </Td>
          <Td>
            <Box>
              <Text fontWeight='bold'>Icaro Oliveira</Text>
              <Text fontWeight='bold' color='gray.300'>
                icarovinici@gmail.com
              </Text>
            </Box>
          </Td>
          {isWideScreen && <Td>28 de Maio, 2021</Td>}
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
      </Tbody>
    </ChakraTable>
  )
}
