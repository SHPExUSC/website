import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "./images/logo.png";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [click, setClick] = useState(false),
        [button, setButton] = useState(true),
        handleClick = () => setClick(!click),
        closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; 

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            <img src={logo} className='navbar-logo-img' alt='LOGO' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='./aboutus' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/calendar' className='nav-links' onClick={closeMobileMenu}>
                Calendar
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            {button && (
              <Link to='/contactus' className='btn--outline' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;