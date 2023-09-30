import React, {useState} from 'react'
import Search from './search/Search';
import styles from "./Navbar.css";
import {PiPaperPlaneRight} from "react-icons/pi"

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleClick = (link) => {
        setActiveLink(link);
      };
    
      const links = ['home', 'about', 'blog', 'page', 'contact'];

      const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
      }

  return (   
    <div className="container container-nav">
     <nav className='nav-container'>
        <div className="logo-container">
            <h1>Sky Rocket</h1>
        </div>
        <div className="nav-content">
        <ul className='lg-navbar'>
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={activeLink === link ? 'active' : ''}
                  onClick={() => handleClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}

                <Search />
            </ul>
            <div className="harmburg-container">
              <i><PiPaperPlaneRight className='harmburg-icon'/></i>
            </div>
        </div>

       
    </nav>

     <div className="mobile-nav-container">
          <ul className='mobile-navbar'>
          {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={activeLink === link ? 'active' : ''}
                  onClick={() => handleClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}
            <div className="gap"></div>
             <Search />
          </ul>
        </div>
    </div>


  )
}

export default Navbar