import React, { useEffect, useState } from 'react'
import './CardHeader.css'
import months from './months';
import { useTheme } from '../../../contexts/themeContext';
import { useUser } from '../../../contexts/userContext';

const CardHeader = () => {

  const [date, setDate] = useState(new Date());
  const { theme } = useTheme();
  const { username, name, linkProfile, createdAt } = useUser();

  useEffect(() => setDate(new Date(createdAt)), [createdAt])

  return (
    <header className='card-header'>
      <a href={linkProfile} target='_blank' rel='noreferrer' className={`username ${theme}`}>
          <h2>{ name }</h2>
          <h3>{ username }</h3>
      </a>
      
      <span>
        {
          `Joined ${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`
        }
      </span>
    </header>
  )
}

export default CardHeader