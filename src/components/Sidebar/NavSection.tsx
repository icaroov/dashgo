import { Box, Stack, Text } from '@chakra-ui/react'

interface NavSrctionProps {
  title: string
  children: React.ReactNode
}

export default function NavSection({ title, children }: NavSrctionProps) {
  return (
    <Box>
      <Text
        fontSize='small'
        fontWeight='bold'
        color='gray.400'
        casing='uppercase'
      >
        {title}
      </Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}
