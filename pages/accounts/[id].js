import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';
import { connectToDatabase } from "../../util/mongodb";
import styles from '../../styles/accounts.module.css'

export default function Account({user}) {

    const router = useRouter()
    const account = user
    const headings = Object.keys(account[0]);
    // const { account } = router.query

    return (
        <div>
          {/* <Link href="/accounts"> */}
            <button type="button" style={{position: 'absolute', paddingRight: 20, paddingLeft: 20}} onClick={() => router.push('/accounts')}>
                <Image src={"/back.svg"} alt="Site Logo" width='35' height='35' alt="back"/>
                {/* Back */}
            </button>
          {/* </Link> */}
          <table className={styles.mainTable} cellSpacing="0" style={{ maxWidth: '60%' }}>
          <tr>
            <th colSpan="2" style={{fontSize: 20}}>{account[0]["First Name"] + ' ' + account[0]["Surname"]}</th>
          </tr>
          { headings.map((prop, index) => (
            <tr key={index}>
              <td>{prop}</td>
              <td>{account[0][prop]}</td>
            </tr>
          ))}
          </table>
      </div>
    )

}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const id = context.query.id

  var ObjectId = require('mongodb').ObjectId;
  const idLookup = new ObjectId(id);

  const user = await db
    .collection("accounts")
    .find({ _id: idLookup })
    .sort({})
    .toArray();

    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
      },
    };
}