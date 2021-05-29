import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine as SearchIcon } from 'react-icons/ri'

export default function SearchBox() {
  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxWidth={400}
      alignSelf='center'
      color='gray.200'
      position='relative'
      bg='gray.800'
      borderRadius='full'
    >
      <Input
        color='gray.50'
        variant='unstyled'
        placeholder='Buscar...'
        _placeholder={{ color: 'gray.400' }}
        px='4'
        mr='4'
      />
      <Icon as={SearchIcon} fontSize='20' />
    </Flex>
  )
}
