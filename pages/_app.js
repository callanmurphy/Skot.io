import '../styles/globals.css'
import '../styles/header.css'
import Link from 'next/link'
import Head from "next/head";
import Image from 'next/image'
import { useRouter } from 'next/router' 
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const pages = ['Dashboard', 'Accounts', 'Calendar'];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  // const router = useRouter()
  // const { account } = router.query

  return (
    <div>
      <Head>
        <title>Skot – {currentPage}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div id="nav-bar">
        <div id="nav-logo">
          <Link href={"/" + pages[0].toLowerCase()}>
            <Image src={"/logo.png"} alt="Site Logo" width='156' height='61' onClick={() => setCurrentPage(pages[0])}/>
          </Link>
        </div>
        <div id="nav-menu">
          <ul>
          { pages.map((page) =>
            <li><Link href={"/" + page.toLowerCase()}><a id={currentPage === page ? "current-page" : null} onClick={() => setCurrentPage(page)}>{page}</a></Link></li>)
          }
          <li className={"icon"} style={{position: 'absolute', right: 25, top: 24}}>
            <Link href={"/" + pages[0].toLowerCase()}>
              <Image src={"/profile.svg"} alt="Site Logo" width='35' height='35' onClick={() => setCurrentPage(pages[0])}/>
            </Link>
          </li>
          </ul>
        </div>
      </div>
      
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
