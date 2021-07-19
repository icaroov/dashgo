import { theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

export const options: ApexOptions = {
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

export const series = [{ name: 'series1', data: [23, 64, 46, 72, 12, 34, 225] }]
