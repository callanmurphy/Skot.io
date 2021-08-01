import { useState } from 'react'
import Container from '../components/container'
import styles from '../styles/dashboard.module.css'

export default function Dashboard() {

    const getToday = () => {
      let date = new Date();
      return date.toDateString();
    }

    return (
      <div>
        <div className={styles.row}>
          <Container headerText={'Suggested'} body={<p>{getToday()}</p>}/>
          <Container headerText={'Notes'} body={<p>Notes</p>} colour={1}/>
        </div>
        <div className={styles.row}>
          <Container headerText={'Suggested'} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>} colour={2} />
          <Container headerText={'Notes'} body={<div><b>Hello</b><p>- goodbye</p></div>} colour={2}/>
          <Container headerText={'Notes'} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>}/>
        </div>
      </div>
    )
}