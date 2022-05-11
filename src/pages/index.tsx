import { Header, Layout, } from 'components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Layout />
      <Header />
      <div className="inDevelopment">
        <h1>In Development</h1>
      </div>
    </>
  )
}

export default Home
