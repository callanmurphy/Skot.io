import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
    <div id="site-header">
    <div id="header-title">
      <Link href="/"><a>Skot</a></Link>
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
