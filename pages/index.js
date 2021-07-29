import styles from '../styles/Info.module.css'
import { useRouter } from 'next/router'
// reference: https://www.youtube.com/watch?v=Sklc_fQBmcs
// docs: https://nextjs.org/docs/basic-features

export default function Home() {

    const router = useRouter()

    return (
        <div>
          <title>Skot</title>
          <h1>Skot</h1>
        </div>
      )
}