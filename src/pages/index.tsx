import Head from 'next/head'
import { Flex, Button, Stack } from '@chakra-ui/react'

import { Input } from '../components'

export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Head>
        <title>Login | dashgo.</title>
      </Head>

      <Flex
        as='form'
        w='100%'
        maxWidth={400}
        bg='gray.800'
        padding='8'
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing={4}>
          <Input name='email' type='email' placeholder='E-mail' />
          <Input name='password' type='password' placeholder='Senha' />
        </Stack>

        <Button type='submit' marginTop='6' colorScheme='pink' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
