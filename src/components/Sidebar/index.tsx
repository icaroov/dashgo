import { Box, Stack } from '@chakra-ui/react'
import {
  RiGitMergeLine,
  RiInputMethodLine,
  RiDashboardLine,
  RiContactsLine,
} from 'react-icons/ri'

import NavLink from './NavLink'
import NavSection from './NavSection'

export default function Sidebar() {
  return (
    <Box as='aside' width='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection title='geral'>
          <NavLink icon={RiDashboardLine} text='dashboard' href='/dashboard' />
          <NavLink icon={RiContactsLine} text='usuários' href='/users' />
        </NavSection>

        <NavSection title='automação'>
          <NavLink icon={RiInputMethodLine} text='formulários' href='/' />
          <NavLink icon={RiGitMergeLine} text='automação' href='/' />
        </NavSection>
      </Stack>
    </Box>
  )
}
