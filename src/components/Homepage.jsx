import React from 'react'
import Group from './Group'


import styles from '../style'
import Line from './Line'
import { love } from '../assets'
import MenuP from './MenuP'
import Newmenu from './Newmenu'
import Pie from './Pie'
import Order from './Order'


const Homepage = () => {
  return (
    <section className=' w-full overflow-hidden '> 



    <div className={`${styles.flexCenter} bg-pinkk z-50`}>
   <div className={`${styles.boxWidth}`}>
    <Group />
   </div>
    </div>

    <div className='md:h-[120px] pink z-30'></div>

    <div className={`${styles.flexCenter} bg-pinkk z-50`}>
   <div className={`${styles.boxWidth}`}>
    <Order />
   </div>
    </div>
    
  
  

   <div className='h-[120px] pink z-30'></div>

   
    </section>
  )
}

export default Homepage
