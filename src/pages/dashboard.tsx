import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect } from 'react'

import { options, series } from '../lib/apexCharts'
import { api, setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function Dashboard() {
  useEffect(() => {
    api
      .get('/me')
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard | dashgo.</title>
      </Head>

      <SimpleGrid flex='1' gap='4' minChildWidth='320px'>
        <Box p={['4', '8']} bg='gray.800' borderRadius={8} pb='4'>
          <Text fontSize='lg' mb='4'>
            Inscritos da semana
          </Text>
          <Chart options={options} series={series} type='area' height={250} />
        </Box>

        <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
          <Text fontSize='lg' mb='4'>
            Taxa de abertura
          </Text>
          <Chart options={options} series={series} type='area' height={250} />
        </Box>
      </SimpleGrid>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupAPIClient(context)
  const { data } = await apiClient.get('/me')

  console.log(data)

  return { props: {} }
})
