import React from 'react';
import logo from '../assets/logo.png';
import './Header.css'

const Header = props => {
    return (
        <div className='header-container'>
        <img className='header-container--logo' src={logo} alt='wellspring realty'/>
            <ul>
                <li>
                    Home
            </li>
                <li>
                    Featured Properties
            </li>
                <li>
                    About us
            </li>
                <li>
                    Contact
            </li>
                <li>
                    Charities
            </li> 
            </ul>

        </div>
    )
}

export default Header;