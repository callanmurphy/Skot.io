import { withRouter } from 'next/router'
import { Component, useState } from 'react'
import Container, { EditContainer } from '../components/container'
import styles from '../styles/dashboard.module.css'
import { connectToDatabase } from "../util/mongodb";

export default withRouter(class Dashboard extends Component{ 
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
          <Container headerText={'Recommended'} 
            body={<><b>Reach out to...</b>{this.props.date.map((item, index) =>
              <p key={index} style={{cursor: 'pointer'}} onClick={() => this.props.router.push('/accounts/' + item._id)}>{item["First Name"] + ' ' + item["Surname"]}</p>)}
            </>}/>
          <EditContainer headerText={this.getToday()} body={<Notes /> } colour={2} />
        </div>
        {/* <div className={styles.row}>
          <Container headerText={this.getToday()} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>} colour={2} />
          <Container headerText={'Notes'} body={<div><b>Hello</b><p>- goodbye</p></div>} colour={2}/>
          <Container headerText={'Notes'} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>}/>
        </div> */}
      </div>
    )
  }
})

export function Notes() {
  const [notesText, setNotesText] = useState('- my cool note \n- this is cool');
  
  const handleChange = (e) => {
    setNotesText(e.target.value);
  }

  return (
    <textarea value={notesText} onChange={handleChange} />
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const date = await db
    .collection("accounts")
    .find({})
    .sort({ "Edit Date": 1 })
    .limit(5)
    .toArray();

  return {
    props: {
      date: JSON.parse(JSON.stringify(date)),
    },
  };
}