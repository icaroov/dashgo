import {
  Divider,
  Heading,
  VStack,
  SimpleGrid,
  Box,
  Flex,
  HStack,
  Button,
} from '@chakra-ui/react'
import Head from 'next/head'

import { Input } from '../../components'

export default function CreateUser() {
  return (
    <>
      <Head>
        <title>Criar Usuário | dashgo.</title>
      </Head>

      <Box bg='gray.800' p='8' borderRadius={8}>
        <Heading size='lg' fontWeight='normal'>
          Criar Usuário
        </Heading>

        <Divider my='6' borderColor='gray.700' />

        <VStack spacing='8'>
          <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
            <Input name='name' label='Nome completo' />
            <Input name='email' type='email' label='E-mail' />
          </SimpleGrid>

          <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
            <Input name='password' type='password' label='Senha' />
            <Input
              name='password_confirmation'
              type='password'
              label='Confirmação da senha'
            />
          </SimpleGrid>
        </VStack>

        <Flex mt='8' justify='flex-end'>
          <HStack spacing='4'>
            <Button colorScheme='whiteAlpha'>Cancelar</Button>
            <Button colorScheme='pink'>Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}
