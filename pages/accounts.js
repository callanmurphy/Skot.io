import { useRouter } from 'next/router'
import { useState } from 'react'
import '../styles/accounts.module.css'

export default function Accounts() {

    const router = useRouter()
    const allData = require('../data/act.json')
    const data = allData.slice(10, 30)
    const headings = Object.keys(data[0]);

    const [selected1, setSelected1] = useState(headings[0]);
    const [selected2, setSelected2] = useState(headings[1]);

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
          <table className="main-table">
          <tr style={{textAlign: 'left'}}>
            <th>First Name</th>
            <th>Surname</th>
            <th>Account Manager</th>
            <th>
              <select onChange={(e) => setSelected1(e.target.value)}>
                { headings.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )) }
              </select>
            </th>
            <th>
              <select onChange={(e) => setSelected2(e.target.value)}>
                { headings.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )) }
              </select>
            </th>
            <th></th>
          </tr>
          { data.map((account, index) => (
            <tr key={index}>
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

// export const styles = StyleSheet.create({
//   container: {
//     text-align: center;
//   },

//   pageTitle: {
//     font-size: 25px;
//   },

//   largeButton: {
//     padding: 15px;
//     background-color: #419CD8;
//     border: white;
//     color: white;
//     font-size: 15px;
//     font-family: "Montserrat", "Helvetica Neue", Helvetica, sans-serif;
//     border-radius: 10px;
//   },

//   largeButton:hover {
//     background-color: #3784b8;
//     color: white;
//   },
// }) 