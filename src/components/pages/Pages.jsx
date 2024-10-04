import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage'
import EgNav from '../EgNav'
import { love } from '../../assets'


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
   


</Routes>



</Router> 
    </>
  )
}

export default Pages