import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import styles from '../../style'


import Button from '../Button'


import Navvbarr from '../Navvbarr'
import Homepage from '../Homepage'


const Pages = () => {
  return (
    <>
<Router >
     <div className=' w-full overflow-hidden pink'> 
      <div className={`${styles.boxWidth} mx-auto`}>
        <Navvbarr />
     </div>
     </div>


<Routes>

    <Route exact path ='/' element={<Homepage />} />  
   


</Routes>



</Router> 
    </>
  )
}

export default Pages