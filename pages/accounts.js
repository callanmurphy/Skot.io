import styles from './_app'
import { useRouter } from 'next/router'
import { useState } from 'react'
// reference: https://www.youtube.com/watch?v=Sklc_fQBmcs
// docs: https://nextjs.org/docs/basic-features

export default function Accounts() {

    const router = useRouter()
    const data = require('../data/act.json')
    const [account, setAccount] = useState(data[0]);
    const headings = Object.keys(data[0]);

    console.log(headings)

    // const searchData = (query) => {
    //     for(var i = 0, numItems = data.length; i < numItems; i++) {
    //         if(data[i].Surname === query) {
    //             setAccount(data[i]);
    //             console.log(data[i].Surname)
    //         }
    //     }
    // }

    return (
        <div>
          <title>Accounts – Skot</title>
          <h1>Accounts</h1>
          <h2>Index:</h2>
          <input id='index' defaultValue={''} onChange={(e) => {e.target.value && setAccount(data[e.target.value])}}/>
          <p>{account["First Name"]}</p>
          <p>{account["Surname"]}</p>
          {/* <pre id="json">
              {JSON.stringify(account, null, 2)}
          </pre> */}
          <table>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Account Manager</th>
          </tr>
          { data.map((account, index) => (
            <tr>
              <td>{account["First Name"]}</td>
              <td>{account["Surname"]}</td>
              <td>{account["Account Manager"]}</td>
              <td><button className={styles.largeButton} type="button" onClick={() => router.push('/account/' + account["Surname"])}>View</button></td>
            </tr>
          ))}
          </table>
        </div>
      )
}