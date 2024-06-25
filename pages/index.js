import Head from 'next/head'
import Homes from '../Components/Home/Homes'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SCMS</title>
      </Head>
      <Homes />
    </div>
  )
}