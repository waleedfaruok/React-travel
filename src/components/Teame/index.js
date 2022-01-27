import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

 class Teame extends Component {

    state = {
      teamework : []
    };
    componentDidMount(){
        axios.get('js/data.json').then((res) =>{
            this.setState({
                teamework :res.data.team
            });
        });
    };
  render() {
      const {teamework} = this.state;
      const listteame = teamework.map((tem) =>{
          return(
            <div className='frem' key={tem.id}>
            <p>{tem.articl}</p>
            <div className='imgfrem'>
                <img src={tem.img}/>
                <div className='prg'>
                 <p>{tem.joen}</p>
                 <p className='sp'>{tem.degin}</p>
                </div>
            </div>
            </div>
          );
      });
    return(
        <div className='container'>
         <div className='tiste-tim'>
          <div className='row-tim'>
           <span>testimonials</span>
           <h3>good news from our clients</h3>
           <p>lorem we input heare clos defualt extend good news from our clients class extend good news from our clients class text arya loremr good news from our clients</p>
          </div>
          <div className='frem-work'>
            {listteame}
          </div>
         </div>
        </div>
    );
  };
};

export default Teame;
