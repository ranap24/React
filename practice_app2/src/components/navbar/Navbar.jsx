import React from 'react'
import './Navbar.css'
import FixUp from '../../assets/FixUp.png';
import { IoSearchOutline, IoServerOutline } from "react-icons/io5";
import { BiBold } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={FixUp} alt="FixUp" />
        <div className="navbarlinks">
            <a href="#Home">Home</a>
            <a href="#Services">Services</a>
            <a href="#Contact">Contact</a>
            <a href=""><IoSearchOutline className='navbarIcon' color='#fff'/></a>
        </div>
        <div className="navbarSignLinks">
            <a href="#">Login</a>
            <button type='button'>Register</button>
        </div>
    </div>
  )
}

export default Navbar
