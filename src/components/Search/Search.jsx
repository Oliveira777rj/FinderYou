import { FaSearch } from 'react-icons/fa'

import React, { useState } from 'react'
import { useUser } from '../../contexts/userContext';
import { useTheme } from '../../contexts/themeContext';

import './search.css'

const Search = () => {
  const { theme } = useTheme();
  const [userName, setUserName] = useState('');
  const { searchUser } = useUser();

  function handleSearchUser(e){
    e.preventDefault();
    searchUser(userName);
    setUserName('');
  }

  return (
    <form className={theme} onSubmit={handleSearchUser}>
      <FaSearch size={28} color='var(--blue)'/>
      <input 
        type='text'
        placeholder='Search Github Username...'
        value={userName}
        onChange={e => setUserName(e.target.value)}
        
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search