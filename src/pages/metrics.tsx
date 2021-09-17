import Head from 'next/head'

import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Metrics | dashgo.</title>
      </Head>

      <h1>Metrics Page</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(
  async (context) => {
    const apiClient = setupAPIClient(context)
    const { data } = await apiClient.get('/me')

    console.log(data)

    return { props: {} }
  },
  {
    permissions: ['metrics.list'],
    roles: ['administrator'],
  }
)
