import Head from 'next/head'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components'

interface InputValuesData {
  email: string
  password: string
}

const signInSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  })

  const errors = formState.errors

  const handleSignIn: SubmitHandler<InputValuesData> = (values) => {
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type='email'
            placeholder='E-mail'
            error={errors.email}
            {...register('email')}
          />
          <Input
            type='password'
            placeholder='Senha'
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          marginTop='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
