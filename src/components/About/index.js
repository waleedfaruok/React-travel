import React, { Component } from 'react';
import './style.css'

class About extends Component {
  render() {
    return (
    <div className='container'>
       <div className='about-row'>
         <div className='bout-img'>
           <img src='image/tref5.jpg'/>
           <div className='span-icon'>
            <span></span>
            <span></span>
            <span></span>
           </div>
         </div>
         <div className='chooese'>
           <span>why choose us</span>
           <h1>nature's majesty awits you</h1>
           <p>lorem componente and react js frem woerk impurt js hyte from lable lorem componente and react</p>
           <button>read more</button>
         </div>
       </div>
    </div>
    );
  }
}
export default About