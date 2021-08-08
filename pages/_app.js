import '../styles/globals.css'
import '../styles/header.css'
import Link from 'next/link'
import React, { useEffect } from 'react';
import Head from "next/head";
import Image from 'next/image'
import { useRouter } from 'next/router' 
import { useState } from 'react';

function Skot({ Component, pageProps }) {
  const pages = ['dashboard', 'accounts', 'calendar'];
  const [auth, setAuth] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const router = useRouter();
  
  // useEffect(() => {
  //   console.log(router.pathname)
  //   if(!auth && !(router.pathname === '/login')){
  //     router.push('/login')
  //     return
  //   }
  //   if(auth && (router.pathname === '/login')){
  //     router.push('/dashboard')
  //     return
  //   }
  // })

  return (
    <div>
      <Head>
        <title>Skot – {router.pathname.slice(1).charAt(0).toUpperCase() + router.pathname.slice(2)}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      {auth ?
        <div id="nav-bar">
          <div id="nav-logo">
            <Link href={"/" + pages[0].toLowerCase()}>
              <Image src={"/logo.png"} alt="Site Logo" width='156' height='61'/>
            </Link>
          </div>
          <div id="nav-hamburger">
            <Image src={hamburgerOpen ? "/x.svg" : "/hamburger.svg"} alt="hamburger menu" width='30' height='30' onClick={() => setHamburgerOpen(!hamburgerOpen)}/>
          </div>
          <div id="nav-menu">
            <ul>
            { pages.map((page, index) =>
              <li key={index}><Link href={"/" + page}><a id={router.pathname === "/" + page ? "current-page" : null}>{page.charAt(0).toUpperCase() + page.slice(1)}</a></Link></li>)
            }
            <li className={"icon"} style={{position: 'absolute', right: 25, top: 24}}>
              <Link href={"/" + pages[0]}>
                <Image src={"/profile.svg"} alt="Site Logo" width='35' height='35' alt="profile"/>
              </Link>
            </li>
            </ul>
          </div>
        </div>
      :
        <div className={"center"} style={{ marginTop: -20 }}>
          <Image src={"/icon.svg"} alt="Site Logo" width='100' height='100'/>
        </div>
      }
      { hamburgerOpen &&
        <div className={"hamburgerOpen"}>
          { pages.map((page, index) =>
          <li key={index}><Link href={"/" + page}><a id={router.pathname === "/" + page ? "current-page" : null}>{page.charAt(0).toUpperCase() + page.slice(1)}</a></Link></li>)
          }
        </div>
      }
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default Skot