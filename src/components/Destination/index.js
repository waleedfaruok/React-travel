import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

 class Destination extends Component {
    state = {
        prodect : []
    };
    componentDidMount(){
        axios.get('js/data.json').then(res =>{this.setState({
            prodect : res.data.section
        })});
    };

  render() {
     const {prodect} = this.state;
     const listprodect = prodect.map(prop =>{
         return(
            <div className='blogse' key={prop.id}>
            <img src={prop.img}/>
            <span>{prop.prgrav}</span>
            <p>{prop.links}</p>
            <div className='icow'>
             <span>{prop.spnes}</span>
             <i className={prop.icons}></i>
            </div>
           </div>
         );
         });
    return (
      <div className='container'>
       <div className='title-dec'>
        <span>our Destination</span>
        <h2>make yours Destination</h2>
       </div>
       <div className='destion-rwo'>
         {listprodect}
       </div>
      </div>
    );
  };
};
export default Destination;
