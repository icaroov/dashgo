import {
  Input as ChrakraInput,
  InputProps as ChrakraInputProps,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

interface InputProps extends ChrakraInputProps {
  name: string
  label?: string
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChrakraInput
        id={name}
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}
