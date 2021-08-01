import Container from '../components/container'
import styles from '../styles/dashboard.module.css'

export default function Dashboard() {

    return (
      <div>
        <div className={styles.row}>
          <Container headerText={'Suggested'} bodyText={'Suggested'} />
          <Container headerText={'Notes'} bodyText={'Notes'} colour={1}/>
        </div>
        <div className={styles.row}>
          <Container headerText={'Suggested'} body={<div><b>Hello</b><p>- hello</p><p>- goodbye</p></div>} colour={2} />
          <Container headerText={'Notes'} bodyText={'Notes'} colour={3}/>
          <Container headerText={'Notes'} bodyText={'Notes'}/>
        </div>
      </div>
    )
}