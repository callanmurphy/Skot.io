import React, { Component, useEffect, useState } from 'react'
import styles from '../styles/search.module.css'
const axios = require('axios');

export const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const fetchData = (value) => {
    axios.get('/api/search/' + value)
    .then(function (response) {
      response.data && response.data.length && props.setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchData(e.target.value);
  }

  return (
        <input 
          className={styles.searchBar}
          type="text"
          id="account-search"
          placeholder="Search by name"
          value={query}
          onChange={(e) => handleChange(e)}
        />
    )
}

export default SearchBar;