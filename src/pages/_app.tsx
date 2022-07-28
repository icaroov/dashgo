import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme } from '../styles/theme'
import { Layout } from '../components'

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { AuthProvider } from '../contexts/authContext'

import { makeServer } from '../lib/mirage'
import { queryClient } from '../services/queryClient'

// if (process.env.NODE_ENV === 'development') {
//   makeServer()
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <SidebarDrawerProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SidebarDrawerProvider>
        </AuthProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
