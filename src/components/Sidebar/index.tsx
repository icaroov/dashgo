import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as='aside' width='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontSize='small' fontWeight='bold' color='gray.400'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' alignItems='center'>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>
                Dashboard
              </Text>
            </Link>

            <Link display='flex' alignItems='center'>
              <Icon as={RiContactsLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontSize='small' fontWeight='bold' color='gray.400'>
            AUTOMAÇÃO
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' alignItems='center'>
              <Icon as={RiInputMethodLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>
                Formulários
              </Text>
            </Link>

            <Link display='flex' alignItems='center'>
              <Icon as={RiGitMergeLine} fontSize='20' />
              <Text fontWeight='medium' ml='4'>
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
