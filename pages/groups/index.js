import { useRouter } from 'next/router'
import { useState } from 'react'
import { connectToDatabase } from "../../util/mongodb";

import { colours, randomColour } from '../../components/colours';
import styles from '../../styles/groups.module.css'

export default function Accounts({ accounts }) {

    const router = useRouter()

    return (
      <div>
        <div className={styles.row}>
          <button className={styles.group} onClick={() => router.push('/dashboard')}>
            New August Clients
          </button>
          <button className={styles.group} style={{backgroundColor: colours.blue}}>
            RESPs
          </button>
        </div>
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