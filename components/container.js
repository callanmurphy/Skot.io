import React, { Component } from 'react'
import styles from '../styles/container.module.css'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: (
        props.colour === 1 ? '#E9AC00' : 
        props.colour === 2 ? '#06a682' : 
        props.colour === 3 ? '#0063D6' :
        '#121212'
      )
    }
  }

  render(){
    let { headerText, body, bodyText } = this.props;
    let { colour } = this.state;

    return (
        <div className={styles.container}>
          <div className={styles.containerHeader} style={{ backgroundColor: colour }}>
            <h1>{headerText}</h1>
          </div>
          <div className={styles.containerBody}>
            {body}
          </div>
        </div>
      )
    }
}

export default Container;