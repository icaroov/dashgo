import { Flex, Input, Button, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
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
          <Input
            id='email'
            name='email'
            type='email'
            focusBorderColor='pink.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{ bgColor: 'gray.900' }}
            size='lg'
            placeholder='E-mail'
          />

          <Input
            id='password'
            name='password'
            type='password'
            focusBorderColor='pink.500'
            bgColor='gray.900'
            variant='filled'
            _hover={{ bgColor: 'gray.900' }}
            size='lg'
            placeholder='Senha'
          />
        </Stack>

        <Button type='submit' marginTop='6' colorScheme='pink' size='lg'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
