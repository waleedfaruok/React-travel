import React from 'react';
import './style.css';
 function Footer() {
  return(
      <div>
      <div className='container'>
      <div className='footer-row'>
        <div className='travel'>
        <div className='trev'>
        <i class="fas fa-mouse-pointer"></i>
        <p>travel</p>
        </div>
        <p>HTMLUseful for copying and pasting into your HTML Webfont with CSS or SVG with JS </p>
        <div className='icon'>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
        </div>
        </div>
        <div className='quick'>
        <h2>quick links</h2>
        <a href='/'>home</a>
        <a href='/'>about</a>
        <a href='/'>destination</a>
        <a href='/'>gallery</a>
        <a href='/'>contact</a>
        <a href='/'>blogs</a>
        </div>
        <div className='address'>
         <h2>our address</h2>
         <div className='mumber'>
         <i class="fas fa-receipt"></i>
         <p>mumbai,egypt -500104</p>
         </div>
         <div className='mumber'>
         <i class="fas fa-phone"></i>
         <p>028-654-897</p>
         </div>
         <div className='mumber'>
         <i class="far fa-envelope"></i>
         <p>waleedfarouk@gmail.com</p>
         </div>
         <div className='mumber'>
         <i class="far fa-clock"></i>
         <p>7:00m - 10:00pm</p>
         </div>
        </div>
        <div className='news-in'>
         <h2>newsletter</h2>
         <p>subscribe for lates updates</p>
         <input type='email' placeholder='enter your email'/>
         <button>subscribe</button>
        </div>
      </div>
      </div>
      <div className='link'>
       <a href='/'>created by <span>mr.web designer</span>| all rights reserved</a>
      </div>
      </div>
  );
}
export default Footer;