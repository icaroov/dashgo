import { Box, Icon, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <Box as='aside' width='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontSize='small' fontWeight='bold' color='gray.400'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link href='/dashboard'>
              <ChakraLink display='flex' alignItems='center'>
                <Icon as={RiDashboardLine} fontSize='20' />
                <Text fontWeight='medium' ml='4'>
                  Dashboard
                </Text>
              </ChakraLink>
            </Link>

            <Link href='/users'>
              <ChakraLink display='flex' alignItems='center'>
                <Icon as={RiContactsLine} fontSize='20' />
                <Text fontWeight='medium' ml='4'>
                  Usuários
                </Text>
              </ChakraLink>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontSize='small' fontWeight='bold' color='gray.400'>
            AUTOMAÇÃO
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <ChakraLink display='flex' alignItems='center'>
              <Icon as={RiInputMethodLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>
                Formulários
              </Text>
            </ChakraLink>

            <ChakraLink display='flex' alignItems='center'>
              <Icon as={RiGitMergeLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>
                Automação
              </Text>
            </ChakraLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
