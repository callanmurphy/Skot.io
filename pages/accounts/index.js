import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { connectToDatabase } from "../../util/mongodb";

import { colours } from '../../components/colours';
import styles from '../../styles/accounts.module.css'
import SearchBar from '../../components/searchBar';

export default function Accounts(props) {

    const router = useRouter()

    const [data, setData] = useState(props.date);

    const headings = Object.keys(data[0]);
    const groups = [{title: 'All', users: {}}, {title: 'New August Clients', users: {}}, {title: 'RESP Accounts', users: {}}];

    const [group, setGroup] = useState(groups[0]);

    const [selections, setSelections] = useState([headings[0], headings[1]]);
    const [selected1, setSelected1] = useState(headings[0]);
    const [selected2, setSelected2] = useState(headings[1]);
    const setSelectedFunctions = [setSelected1, setSelected2]
    
    // const [sort, setSort] = useState([true, null, null, null, null]);
    const [columns, setColumns] = useState([
      {title: 'First', sort: null, prop: "First Name"},
      {title: 'Last', sort: null, prop: "Last Name"},
      {title: 'Advisor', sort: null, prop: "Account Manager"}
    ])

    const setSort = (item, value) => {
      const index = columns.indexOf(item);
      setColumns([
        {title: 'First', sort: index === 0 ? value : null, prop: "First Name"},
        {title: 'Last', sort: index === 1 ? value : null, prop: "Last Name"},
        {title: 'Advisor', sort: index === 2 ? value : null, prop: "Account Manager"}
      ])
      // index === 0 ?
      //   value ? setData(props.first) : setData(props.first2) :
      // index === 1 ?
      //   value ? setData(props.last) : setData(props.last2) :
      // index === 2 ?
      //   value ? setData(props.advisor) : setData(props.advisor2) :
      // null
      columns[index].sort = value;
    }

    return (
        <div className={styles.twoColumns}>
          <div>
            <div>
              <select className={styles.drop}>
                { groups.map((item, index) => (
                    <option key={index}>{item.title}</option>
                ))}
              </select>
              <SearchBar setData={setData} />
            </div>
            <table className={styles.mainTable} cellSpacing="0">
            <tr>
              { columns.map((item, index) =>
                // <th onClick={() => { item.sort !== null && setSort(item, !item.sort); item.sort === null && setSort(item, true) }} style={{cursor: 'pointer'}}>
                <th key={index}>  
                  {item.title}
                  {/* {item.sort !== null && <div> <Image src={"/sort.svg"} alt="Site Logo" width='20' height='20' alt="sort" className={!item.sort && "flip"}/> </div> } */}
                </th>
              )}
              { selections.map((item, index) =>
                <th key={index}>
                  <select onChange={(e) => {setSelectedFunctions[index](e.target.value); setSelections([selected1, selected2])}}>
                    { headings.map(option => (<option key={option} value={option} selected={option === item ? "selected" : null}>{option}</option>)) }
                  </select>
                </th>
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
        </div>
      )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const date = await db
    .collection("accounts")
    .find({})
    .sort({ "Edit Date": -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      date: JSON.parse(JSON.stringify(date)),
    },
  };
}