import { Component, useState } from 'react'
import Container, { EditContainer } from '../components/container'
import styles from '../styles/dashboard.module.css'

export default class Dashboard extends Component{ 
  constructor(props) {
    super(props);
    // this.state = {
      
    // }
  }

  getToday = () => {
    let date = new Date();
    return date.toDateString();
  }

  render() {
    return (
      <div>
        <div className={styles.row}>
          <Container headerText={'Suggested'} body={<p>{this.getToday()}</p>}/>
          <EditContainer headerText={'Notes'} body={<Notes /> }colour={1}/>
        </div>
        <div className={styles.row}>
          <Container headerText={'Suggested'} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>} colour={2} />
          <Container headerText={'Notes'} body={<div><b>Hello</b><p>- goodbye</p></div>} colour={2}/>
          <Container headerText={'Notes'} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>}/>
        </div>
      </div>
    )
  }
}

export function Notes() {
  const [notesText, setNotesText] = useState('- my cool note \n- this is cool');
  
  const handleChange = (e) => {
    setNotesText(e.target.value);
  }

  return (
    <textarea value={notesText} onChange={handleChange} />
  )
}