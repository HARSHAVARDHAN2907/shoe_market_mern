import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <ul className='support'>
        <li className='a1'>SUPPORT</li>
            <li>Contact Us</li>
            <li>Sponsor Us</li>
            <li>Collaborate</li>
            <li>Track Order</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
        <ul className="support">
            <li className='a1'>FAQs</li>
            <li>My Account</li>
            <li>Return Policy</li>
            <li>Tech Glossary</li>
            <li>Initiate Return</li>
        </ul>
        <ul className="support">
            <li className='a1'>ABOUT</li>
            <li>Company</li>
            <li>Corporate News</li>
            <li>Press Center</li>
            <li>Investors</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>DranzX DNA</li>
        </ul>
        <div className="socials">
        <div className="top">Follow Us On</div><br/>
        <span className="fa fa-youtube"></span>
        <span className="fa fa-facebook"></span>
        <span className="fa fa-twitter"></span>
        <span className="fa fa-instagram"></span>
        <span className="fa fa-pinterest"></span><br/><hr/>
        <div className="rights">All rights reserved.</div>
        <hr/>
        </div>
      </div>
    </div>
  )
}

export default Footer;
