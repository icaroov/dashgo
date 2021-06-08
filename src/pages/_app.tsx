import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { Layout } from '../components'
import { SidebarDrawerProvider } from '../hooks/SidebarDrawer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
