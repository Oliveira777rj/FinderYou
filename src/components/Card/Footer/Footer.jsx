import React from 'react'
import Item from './Item'
import { FaBuilding, FaLink, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import { useUser } from '../../../contexts/userContext';
import './Footer.css'
const Footer = () => {

    const { company, location, twitter, blog } = useUser();

  return (
    <footer className='card-footer'>
        <section>
            <Item title={location}>
                < FaMapMarkerAlt size={20} color='inherit'/>
            </Item>

            <Item title={blog} link={blog}>
                < FaLink size={20} color='inherit'/>
            </Item>
        </section>

        <section>
            <Item title={twitter} link={`https://twitter.com/${twitter}`}>
                < FaTwitter size={20} color='inherit'/>
            </Item>

            <Item title={company}>
                < FaBuilding size={20} color='inherit'/>
            </Item>
        </section>
    </footer>
  )
}

export default Footer