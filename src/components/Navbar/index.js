import React, { Component } from 'react';
import './Style.css'

class Navbar extends Component{
  render(){
    const clicktoglle = () =>{
        let list = document.querySelector('.lis-nav1');
        if(list.style.display === 'none'){
           list.style.display = 'block'
        }else{
           list.style.display = 'none'
        }
     }
     window.onscroll = () =>{
      let btnw =document.querySelector('.btn-nt');
      let hesd = document.querySelector('.headere');
      if(window.scrollY >= 10){
         hesd.style.backgroundColor ="transparent";
      }else{
         hesd.style.backgroundColor ='rgb(31, 31, 31)';
      }
      if(window.scrollY >= 1000){
         btnw.classList.add('add');
         btnw.addEventListener('click',() =>{
              window.scrollTo({
                top:0,
                behavior:'smooth'
              });
         });
      }else{
         btnw.classList.remove('add');
      }
        
     }
   
     return (
   <div>
   <div className='headere'>
   <div className='container'>  
   <div className='navbar'>
   <div className='title'>
            <i className="fab fa-ethereum"></i>
            <a href='/'>travel</a>
            </div>
            <ul className='lis-nav'>
            <li><a href='#home<'>home</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#destination'>destination</a></li>
            <li><a href='#gallery'>gallery</a></li>
            <li><a href='#servese'>servese</a></li>
            </ul>
            <div className='bok-new'>
             <button onClick={clicktoglle} className='btn'>book now</button>
            </div>
   </div>
   <ul className='lis-nav1'>
   <li><a href='#home<'>home</a></li>
   <li><a href='#about'>about</a></li>
   <li><a href='#destination'>destination</a></li>
   <li><a href='#gallery'>gallery</a></li>
   <li><a href='#servese'>servese</a></li>
   </ul>
   </div>
     <button className='btn-nt'>up</button>
   </div>
   </div>
     );

  }
} 
export default Navbar;
