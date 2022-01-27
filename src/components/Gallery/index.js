import React ,{useState,useEffect} from 'react';
import './style.css';
import axios from 'axios';
 function Gallery() {
     const [addimges ,setaddimges] = useState([]);
     useEffect(() =>{
      axios.get('js/data.json').then((res) =>{
        setaddimges(res.data.gallery);
      });
     },[]);
  return(
      <div className='container'>
      <div className='galre'>
          <span>our gallery</span>
          <h2>we record mamories</h2>
      </div>
      <div className='row-gallery'>
        {addimges.map((im) =>
            <div className='gll-im' key={im.id}>
            <div className='over'>
                <h3>Enjoy your time</h3>
            </div>
             <img src={im.img}/>
      </div>
        )}
      </div>
      </div>
  );
}

export default Gallery
