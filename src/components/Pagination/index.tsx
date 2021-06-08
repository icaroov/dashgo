import { Box, Stack } from '@chakra-ui/react'

import PaginationItem from './PaginationItem'

export default function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      spacing='4'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing='2' direction='row'>
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
      </Stack>
    </Stack>
  )
}
