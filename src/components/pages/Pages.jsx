import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage'
import EgNav from '../EgNav'
import { love } from '../../assets'
import MenuP from '../MenuP'
import Order from '../Order'
import styles from '../../style'
import RandomHeart from '../Heart'


const Pages = () => {
  return (
    <>
<Router >
  
<div className='w-full top-0 green'>
  <EgNav />
</div>


<Routes>

    <Route exact path ='/' element={<Homepage />} />  
      
   


</Routes>

<div className={`${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
<RandomHeart />
</div>
</div>

</Router> 
    </>
  )
}

export default Pages