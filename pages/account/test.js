import { useRouter } from 'next/router' 
import Head from 'next/head'

export default function Stock({ stock }) {

    const router = useRouter()
    const { ticker } = router.query

    return (
        <div class='indentText'>
        <Head>
            <title>{ stock.name }</title>
        </Head>
        <h1>Data for: { ticker }</h1>
        <br></br>
        <p>{ ticker } over the last 30 days</p>
        <p>{ stock.price }</p>
        </div>
    )

}

export async function getStaticProps({ params }) {

    const req = await fetch('http://localhost:3000/${ params.id }.json')
    const data = await req.json();

    return {
        props: { stock: data },
    }

}

export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/${ params.id }.json')
    const data = await req.json();

    const paths = data.map(stock => {
        return { params: {ticker: stock}}
    })

    return {
        paths,
        fallback: false
    }
}