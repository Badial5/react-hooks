import React from 'react'

import { Link, Outlet } from 'react-router-dom'

//Logo
import cwlogo from "../../assets/logo/cwlogo.png"

//Css
import "./navbar.styles.scss"


const Navbar = () => {
  return (
    <>
    <nav className='navbar-container' >
        <div className='navbar-logo__container' >
            <Link to='/'>
                <img src={cwlogo} className="navbar-logo" alt="logo" />
            </Link>
        </div>
    </nav>
        
    <Outlet />
    </>
  )
}

export default Navbar
