import { useRouter } from 'next/router' 

export default function Stock() {

    const router = useRouter()
    const { account } = router.query

    return (
        <div class='indentText'>
        <h1>Account: { account }</h1>
        <br></br>
        </div>
    )

}