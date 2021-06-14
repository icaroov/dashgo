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
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../../components'

interface InputValuesData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Senha com no mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserSchema),
  })

  const errors = formState.errors

  const handleCreateUser: SubmitHandler<InputValuesData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>Criar Usuário | dashgo.</title>
      </Head>

      <Box
        as='form'
        bg='gray.800'
        p='8'
        borderRadius={8}
        my='4'
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Heading size='lg' fontWeight='normal'>
          Criar Usuário
        </Heading>

        <Divider my='6' borderColor='gray.700' />

        <VStack spacing={['6', '8']}>
          <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
            <Input
              {...register('name')}
              label='Nome completo'
              error={errors.name}
            />
            <Input
              {...register('email')}
              type='email'
              label='E-mail'
              error={errors.email}
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
            <Input
              {...register('password')}
              type='password'
              label='Senha'
              error={errors.password}
            />
            <Input
              {...register('password_confirmation')}
              type='password'
              label='Confirmação da senha'
              error={errors.password_confirmation}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt='8' justify='flex-end'>
          <HStack spacing='4'>
            <Link href='/users' passHref>
              <Button as='a' colorScheme='whiteAlpha'>
                Cancelar
              </Button>
            </Link>
            <Button
              type='submit'
              colorScheme='pink'
              isLoading={formState.isSubmitting}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}
