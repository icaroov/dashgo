import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../hooks/SidebarDrawer'

import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

export default function Header() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as='header'
      maxWidth={1480}
      width='100%'
      height='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isWideScreen && (
        <IconButton
          aria-label='open navigation menu'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        />
      )}

      <Logo />

      {isWideScreen && <SearchBox />}

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  )
}
