import { Stack } from '@chakra-ui/react'
import NavLink from './NavLink'
import NavSection from './NavSection'
import {
  RiGitMergeLine,
  RiInputMethodLine,
  RiDashboardLine,
  RiContactsLine,
} from 'react-icons/ri'

export default function SidebarNav() {
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
    </Stack>
  )
}
