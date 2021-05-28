import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

import { Header, Sidebar } from '../components'

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-04-03T00:00:00.0000Z',
      '2021-04-04T00:00:00.0000Z',
      '2021-04-05T00:00:00.0000Z',
      '2021-04-06T00:00:00.0000Z',
      '2021-04-07T00:00:00.0000Z',
      '2021-04-08T00:00:00.0000Z',
      '2021-04-09T00:00:00.0000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.7,
    },
  },
}

const series = [{ name: 'series1', data: [23, 64, 46, 72, 12, 34, 225] }]

export default function Dashboard() {
  return (
    <Flex direction='column' height='100vh'>
      <Header />

      <Flex width='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

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
      </Flex>
    </Flex>
  )
}
