import { Stack, Button, Text } from '@chakra-ui/react'
import NavLink from './NavLink'
import NavSection from './NavSection'
import {
  RiGitMergeLine,
  RiInputMethodLine,
  RiDashboardLine,
  RiContactsLine,
  RiReplyLine,
} from 'react-icons/ri'

import { useAuth } from '../../hooks/useAuth'

export default function SidebarNav() {
  const { signOut } = useAuth()
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='geral'>
        <NavLink icon={RiDashboardLine} text='dashboard' href='/dashboard' />
        <NavLink icon={RiContactsLine} text='usuários' href='/users' />
      </NavSection>

      <NavSection title='automação'>
        <NavLink icon={RiInputMethodLine} text='formulários' href='/forms' />
        <NavLink icon={RiGitMergeLine} text='automação' href='/automation' />
      </NavSection>

      <Button
        size='sm'
        fontSize='xs'
        width='100%'
        colorScheme='pink'
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
        onClick={signOut}
      >
        <RiReplyLine />

        <Text marginLeft='15px'>Sair do Sistema</Text>
      </Button>
    </Stack>
  )
}
