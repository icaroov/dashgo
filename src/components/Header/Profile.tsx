import { useEffect } from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { useAuth } from '../../hooks/useAuth'

interface ProfileProps {
  showProfileData?: boolean
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useAuth()

  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Icaro Oliveira</Text>
          <Text color='gray.300' fontSize='small'>
            {user?.email}
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Icaro Oliveira' />
    </Flex>
  )
}
