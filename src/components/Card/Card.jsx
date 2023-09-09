import React from 'react'
import './card.css'
import HeaderCard from './CardHeader/HeaderCard'
import Counters from './Counters/Counters'
import Footer from './Footer/Footer'
import { useTheme } from '../../contexts/themeContext'
import { useUser } from '../../contexts/userContext'

const Card = () => {
  const { theme } = useTheme();
  const { bio, avatar } = useUser();

  return (
    <div className={`card-container ${theme}`}>
        <img className='image' alt="Imagem Usuário" src={avatar}/>

        <main className='card-body'>

            <HeaderCard />
            <p className='bio'>
              {
                bio ? bio : 'This profile has no bio'
              }
            </p>

            <Counters />
            <Footer />
        </main>
    </div>
  )
}

export default Card