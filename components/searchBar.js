import React, { Component, useState } from 'react'
import styles from '../styles/search.module.css'

export const SearchBar = (props) => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');

  const fetchData = async (query) => {
    try {
      const res = await fetch(
        `${
          process.env.SERVER_IP
        }search/${query}`
      );
      const result = await res.json();
      alert('jerr');
      setData(result);
    } catch (e) {
      alert('Error --- ', e);
      setData([]);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchData(e.target.value);
  }

  return (<div style={{alignItems: 'center'}}>
        <input 
          className={styles.searchBar}
          type="text"
          id="account-search"
          placeholder="Search by name"
          value={query}
          onChange={(e) => handleChange(e)}
        />
        {data !== '' && <b>{'data is' + JSON.stringify(data)}</b>}
        {/* { data && data.map((account, index) => {
          <p>{account["First Name"]}</p>
        })} */}
      </div>
    )
}

export default SearchBar;