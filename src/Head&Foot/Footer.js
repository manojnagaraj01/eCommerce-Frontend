import React from 'react';
import './Footer.css';
import Payment from '../Image/payment All.svg'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h2>About</h2>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Stories</li>
          <li>Wholesale</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className="footer-section help">
        <h2>Help</h2>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
        </ul>
      </div>
      <div className="footer-section policy">
        <h2>Consumer Policy</h2>
        <ul>
          <li>Terms of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>Grievance Redressal</li>
          <li>EPR Compliance</li>
        </ul>
      </div>
      <div className="footer-section social">
        <h2>Follow Us</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="footer-section copyright">
        <p> © 2000 - {currentYear} Dummycart. All rights reserved.</p>
        <p>Gift card</p>
        <p>Advertise</p>
        <p>Help Center</p>
        <img src={Payment} alt='not'/>
      </div>
    </footer>
  );
};

export default Footer;
