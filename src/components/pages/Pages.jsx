import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage'
import EgNav from '../EgNav'
import { love } from '../../assets'
import MenuP from '../MenuP'
import Order from '../Order'


const Pages = () => {
  return (
    <>
<Router >
     {/* <div className=' w-full overflow-hidden '> 
      <div className={`${styles.boxWidth} mx-auto`}>
        <Navvbarr />
     </div>
     </div> */}


<div className='w-full top-0 green'>
  <EgNav />
</div>


<Routes>

    <Route exact path ='/' element={<Homepage />} />  
    <Route exact path ='/menu' element={<Order />} />  
   


</Routes>



</Router> 
    </>
  )
}

export default Pages