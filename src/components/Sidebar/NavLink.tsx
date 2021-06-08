import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react'
import ActiveLink from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  icon: React.ElementType
  text: string
  href?: string
}

export default function NavLink({ icon, text, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text fontWeight='medium' ml='4' casing='capitalize'>
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
