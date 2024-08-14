import React from 'react'

import { Parallax } from 'react-parallax'
import { gif, guide, pic, ppl } from '../../assets';
import Guidingthree from './Guidingthree';




const ParaGuid = () => {


 const imageStyle = {
  // position: 'relative',
  height: '60vh',
  width: 'auto',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 marginRight: 'auto',
 marginLeft: 'auto',
zIndex: 2,
borderRadius: '24px',
 overflow: 'visible'
 };




  
  return (
    <div style={{textAlign: 'center', height:'70vh'}}>
<div>

    <Parallax strength={600} 
    bgImage={gif}
    style={{
      position: 'relative',
      height: '70vh',
      width: 'auto',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     marginRight: 'auto',
     marginLeft: 'auto',
    zIndex: 1,
    BackgroundPosition: 'center',
      // overflow: 'visible',
     

    }} 
    >
    
    
      <div style={{position:'absolute', top: '50%', left:'50%', zIndex: 2 , 
      textAlign:'center', transform:'translate(-50%, -50%)', alignItems: 'center', }}>
        <div style={{ imageStyle}}>
         <Guidingthree />
       </div> 
      
      </div>
  
  
</Parallax>
  
</div>
</div>
  );

};

export default ParaGuid