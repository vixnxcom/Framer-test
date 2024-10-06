import React from 'react'
import Group from './Group'


import styles from '../style'
import Line from './Line'
import { love } from '../assets'
import MenuP from './MenuP'
import Newmenu from './Newmenu'
import Pie from './Pie'


const Homepage = () => {
  return (
    <section className=' w-full overflow-hidden '> 



    <div className={`${styles.flexCenter} bg-pinkk z-50`}>
   <div className={`${styles.boxWidth}`}>
    <Group />
   </div>
    </div>

    <div className='md:h-[120px] pink z-30'></div>

    
    <div className={`${styles.flexCenter}  bg-blue-400 md:h-auto h-[120vh]`}>
   <div className={`${styles.boxWidth} `}>
  {/* title */}
  <h1 className={`${styles.flexCenter}   pop-bold text-6xl justify-center items-center mx-auto text-white `}>
    Menu
  </h1>
  {/* title */}

    <Newmenu />
    <Pie/>
   </div>
    </div>
  

   <div className='h-[120px] pink z-30'></div>

   
    </section>
  )
}

export default Homepage
