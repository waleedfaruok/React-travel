import React from 'react';
import './style.css';

function World() { 
    const getdata = 'start your adventrues';
    const title = 'lets Explore world';
    const sicttio = 'lorem lets Explore world start your adventrues lorem lets Explore  world start your adventrues'
  return(
      <div className='row-world'>
      <div className='over-blue'></div>
      <div className='title-world'>
        <span>{getdata}</span>
        <h1>{title}</h1>
        <p> {sicttio}</p>
        <button>booknow</button>
      </div>
       <img src='image/tref10.jpg'/>
      </div>
  );
}

export default World;