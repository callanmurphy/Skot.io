import { useRouter } from 'next/router'
import { useState } from 'react'
import { connectToDatabase } from "../../util/mongodb";
import styles from '../../styles/accounts.module.css'

export default function Accounts({ accounts }) {

    const router = useRouter()
    const data = accounts
    const headings = Object.keys(data[0]);

    const [selections, setSelections] = useState([headings[0], headings[1]]);

    const [selected1, setSelected1] = useState(headings[0]);
    const [selected2, setSelected2] = useState(headings[1]);

    const setSelectedFunctions = [setSelected1, setSelected2]

    return (
        <div>
          <table className={styles.mainTable} cellSpacing="0">
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Advisor</th>
            { selections.map((item, index) =>
              <th key={index}><select onChange={(e) => {setSelectedFunctions[index](e.target.value); setSelections([selected1, selected2])}}>
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
              <td><button type="button" onClick={() => router.push('/accounts/' + account._id.toString())}>View</button></td>
            </tr>
          ))}
          </table>
        </div>
      )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const accounts = await db
    .collection("accounts")
    .find({})
    .sort({ "Edit Date": -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      accounts: JSON.parse(JSON.stringify(accounts)),
    },
  };
}