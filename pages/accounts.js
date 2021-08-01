import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/accounts.module.css'

export default function Accounts() {

    const router = useRouter()
    const allData = require('../data/act.json')
    const data = allData.slice(10, 30)
    const headings = Object.keys(data[0]);

    const [selections, setSelections] = useState([headings[0], headings[1]]);

    const [selected1, setSelected1] = useState(headings[0]);
    const [selected2, setSelected2] = useState(headings[1]);

    const setSelectedFunctions = [setSelected1, setSelected2]

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
          <table className={styles.mainTable} cellSpacing="0">
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Account Manager</th>
            { selections.map((item, index) =>
              <th><select onChange={(e) => {setSelectedFunctions[index](e.target.value); setSelections([selected1, selected2])}}>
                { headings.map(option => (<option key={option} value={option}>{option}</option>)) }
              </select></th>
            )}
            <th></th>
          </tr>
          { data.map((account, index) => (
            <tr key={account + index}>
              <td>{account["First Name"]}</td>
              <td>{account["Surname"]}</td>
              <td>{account["Account Manager"]}</td>
              <td>{account[selected1]}</td>
              <td>{account[selected2]}</td>
              <td><button type="button" onClick={() => router.push('/account/' + account["First Name"] + '-' + account["Surname"])}>View</button></td>
            </tr>
          ))}
          </table>
        </div>
      )
}