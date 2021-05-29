import Link from 'next/link'
import { Icon, Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react'

interface NavLinkProps extends LinkProps {
  icon: React.ElementType
  text: string
  href?: string
}

export default function NavLink({ icon, text, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href}>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text fontWeight='medium' ml='4' casing='capitalize'>
          {text}
        </Text>
      </ChakraLink>
    </Link>
  )
}
