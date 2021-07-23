import { Box, Stack, Text } from '@chakra-ui/react'

import PaginationItem from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export default function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage)
  const followingPages = Math.min(currentPage + siblingsCount, lastPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, followingPages)
      : []

  return (
    <Stack
      direction={['column', 'row']}
      spacing='4'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>{currentPage}</strong> de <strong>{lastPage}</strong>
      </Box>
      <Stack spacing='2' direction='row'>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text width='6' color='gray.500' textAlign='center'>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            )
          })}

        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            )
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text width='6' color='gray.500' textAlign='center'>
                ...
              </Text>
            )}

            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
