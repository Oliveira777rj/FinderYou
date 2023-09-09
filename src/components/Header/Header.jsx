import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; 
import './header.css';
import { useTheme } from '../../contexts/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
        <h1>YouFinder</h1>

        <button onClick={toggleTheme}>
            <span>
              { theme === 'dark' ? 'light' : 'dark'}
            </span>
            {
              theme === 'dark' ? (<FaSun size={18} color='var(--gray)'/>) : (<FaMoon size={18} color='var(--gray)'/>)
            }

            
        </button>
    </header>
  )
}

export default Header