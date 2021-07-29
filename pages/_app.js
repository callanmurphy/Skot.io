import '../styles/globals.css'
import '../styles/header.css'
import Link from 'next/link'
import Head from "next/head";
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Skot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div id="nav-bar">
        <div id="nav-title">
          <Link href="/">
            <Image src={"/logo.png"} alt="Site Logo" width='156' height='61' />
          </Link>
        </div>
        <div id="nav-menu">
          <ul>
          <li><Link href="/calendar"><a>Calendar</a></Link></li>
          <li><Link href="/accounts"><a>Accounts</a></Link></li>
          </ul>
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
