import React ,{useState,useEffect} from 'react';
import './style.css';
import axios from 'axios';

 function Blogs() {

    const [blog, setblog] = useState('');
    const [blo , setblo] = useState("");

   useEffect(() =>{
    setblog('blogs & posts');
    setblo('the untold story');
   },[]);

    const [blogse, setblogse] = useState([]);

    useEffect(() =>{
       axios.get('js/data.json').then((res) =>{
              setblogse(res.data.blogs);
       });
    },[]);
  return(
      <div className='container'>
          <div className='blogs-post'>
            <span>{blog}</span>
            <h1>{blo}</h1>
          </div>
          <div className='blogw-row'>
            {blogse.map((pop) =>
             <div className='blog' key={pop.id}>
              <img src={pop.img}/>
              <span>{pop.lif}</span>
              <p>{pop.title}</p>
              <div className='iconse'>
                <div className='icon-span'>
                <i className={pop.icon}></i>
                <span>{pop.icob}</span>
                </div>
                <div className='icon-span'>
                <i className={pop.icons}></i>
                 <span>{pop.admin}</span>
                </div>
              </div>
            </div>
            )};
        
          </div>
      </div>
  );
}
export default Blogs;
