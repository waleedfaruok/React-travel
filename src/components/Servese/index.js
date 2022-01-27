import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.css'
 function Servese() {
     const [serveses , setserveses] = useState([]);

     useEffect(() =>{
      axios.get('js/data.json').then((resl) =>{
        setserveses(resl.data.server);
      });
     },[]);
  return (
      <div className='container'>
       <div className='server-our'>
        <span>our services</span>
        <h2>countless experience</h2>
       </div>
       <div className='serivec-row'>
        {serveses.map(serfe =>
        <div className='serv-rwo' key={serfe.id}>
        <i className={serfe.icon}></i>
        <span>{serfe.title}</span>
        <p>{serfe.articl}</p>
       </div>
       )}
       </div>
      </div>
  );
}
export default  Servese;