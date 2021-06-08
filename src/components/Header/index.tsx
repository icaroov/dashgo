import { Flex, useBreakpointValue } from '@chakra-ui/react'

import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

export default function Header() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

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
      <Logo />

      {isWideScreen && <SearchBox />}

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  )
}
