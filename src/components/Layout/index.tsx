import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from '../Header'
import Sidebar from '../Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const isLoginPage = router.asPath === '/'

  return (
    <>
      {!isLoginPage && (
        <Flex direction='column' height='100vh'>
          <Header />

          <Flex width='100%' maxWidth={1480} my='6' mx='auto' px='6'>
            <Sidebar />
            <Box as='main' flex='1'>
              {children}
            </Box>
          </Flex>
        </Flex>
      )}

      {children}
    </>
  )
}
