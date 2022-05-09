import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Ricardo Sandoval</title>
      <meta name="description" content="Ricardo Sandoval, Full-Stack Developer. Personal porfolio website :D" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
