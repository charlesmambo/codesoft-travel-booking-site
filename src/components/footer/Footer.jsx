import React from 'react';
import styles from './Footer.css';
import {BiSolidPhoneCall} from "react-icons/bi";
import {BiLogoFacebookCircle} from "react-icons/bi";
import {BiLogoInstagramAlt} from "react-icons/bi";
import {RiTwitterXFill} from "react-icons/ri";
import {AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
    <div className='footer'>
            <div className="help-container">
                <h3>Need any help?</h3>
                <div className='help'>
                <i><BiSolidPhoneCall className="footer-icon"/></i>
                <p>+00 126 436 769</p>
                </div>

                <div className='help'>
                <h5>Mail to our support team</h5>
                <p>support@domain.com</p>
                </div>

                <div className='help footer-icons'>
                    <h5>Follow us on</h5>
                    <div className="footer-icon-container">
                    <i><BiLogoFacebookCircle  className="footer-icon"/></i>
                    <i><BiLogoInstagramAlt  className="footer-icon"/></i>
                    <i><RiTwitterXFill  className="footer-icon"/></i>
                    <i><AiFillLinkedin  className="footer-icon"/></i>
                    </div>
                
                </div>
               
            </div>

            <div className="footer-link company">
            <h3>Company</h3>
                <ul>
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Testimonials</a>
                    </li>
                    <li>
                        <a href="">Work with Us</a>
                    </li>
                    <li>
                        <a href="">Rewards</a>
                    </li>

                    <li>
                        <a href="">Meet the Team</a>
                    </li>
                </ul>
            </div>

            <div className="footer-link company">
            <h3>Support</h3>
                <ul>
                    <li>
                        <a href="">Account</a>
                    </li>
                    <li>
                        <a href="">Faq</a>
                    </li>
                    <li>
                        <a href="">Legal</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>

                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                </ul>
            </div>

            <div className="footer-link company">
            <h3>Other Services</h3>
                <ul>
                    <li>
                        <a href="">Community program</a>
                    </li>
                    <li>
                        <a href="">Rewards Program</a>
                    </li>
                    <li>
                        <a href="">PointsPLUS</a>
                    </li>
                    <li>
                        <a href="">Partners</a>
                    </li>

                    <li>
                        <a href="">Hotel list</a>
                    </li>
                </ul>
            </div>

            <div className="footer-link company">
            <h3>Top Cities</h3>
                <ul>
                    <li>
                        <a href="">Alaska</a>
                    </li>
                    <li>
                        <a href="">California</a>
                    </li>
                    <li>
                        <a href="">San Francisco</a>
                    </li>
                    <li>
                        <a href="">New York</a>
                    </li>

                    <li>
                        <a href="">Chicago</a>
                    </li>
                </ul>
            </div>
    </div>
    <p className='codeby'>codedby <span>charles mambo</span></p>
    </footer>
  )
}

export default Footer
