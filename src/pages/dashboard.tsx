import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import { options, series } from '../lib/apexCharts'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | dashgo.</title>
      </Head>

      <SimpleGrid flex='1' gap='4' minChildWidth='320px'>
        <Box p='4' bg='gray.800' borderRadius={8} pb='4'>
          <Text fontSize='lg' mb='4'>
            Inscritos da semana
          </Text>
          <Chart options={options} series={series} type='area' height={250} />
        </Box>

        <Box p='4' bg='gray.800' borderRadius={8} pb='4'>
          <Text fontSize='lg' mb='4'>
            Taxa de abertura
          </Text>
          <Chart options={options} series={series} type='area' height={250} />
        </Box>
      </SimpleGrid>
    </>
  )
}
