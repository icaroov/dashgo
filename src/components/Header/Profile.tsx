import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export default function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Icaro Oliveira</Text>
        <Text color='gray.300' fontSize='small'>
          icarovinici@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Icaro Oliveira' />
    </Flex>
  )
}
