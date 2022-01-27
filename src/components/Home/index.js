import React, { Component } from "react";
import './style.css'
class Home extends Component{
    render(){
        return(
         <div className="home">
         <div className="container">
        <div className="home-imge">
        <div className="over"></div>
        <div className="floe">
        <h2>follow us</h2>
        <h1>to the unknown</h1>
        <p>lorem web devt hyt nsgdre gthyd defulate umport home siction start heare blome active</p>
        <button>book now</button>
        </div>
         <img src="image/tref15.jpg"/>
        </div>
          <div className="forem">
           <div className="lab1">
           <span className='lop'>where to?</span>
           <input type="text" placeholder="place name"/>
           </div>
           <div className="lab1">
           <span className='lop'>when?</span>
           <input type="date"/>
           </div>
           <div className="lab1">
           <span className='lop'>how many?</span>
           <input type="number" placeholder="number tourists"/>
           </div>
           <div className="lab1">
            <button>find now</button>
           </div>
          </div>
         </div>
         </div>
        );
    }
}
export default Home;