import { HStack, Icon } from '@chakra-ui/react'
import {
  RiNotificationLine as NotificationIcon,
  RiUserAddLine as UserIcon,
} from 'react-icons/ri'

export default function NotificationsNav() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py='1'
      color='gray.300'
      borderRightWidth={1}
      borderColor='gray.700'
    >
      <Icon as={NotificationIcon} fontSize='20' />
      <Icon as={UserIcon} fontSize='20' />
    </HStack>
  )
}
