import React from 'react'
import Group from './Group'


import styles from '../style'
import Line from './Line'
import { love } from '../assets'
import MenuP from './MenuP'
import Newmenu from './Newmenu'
import Pie from './Pie'
import Order from './Order'
import Stats from './Stats'
import Custom from './Custom'
import Orders from './Orders'
import Recipes from './Recipes'
import Choice from './Choice'
import Choicefile from './Choicefile'
import About from './aboutUs.jsx/About'
import Recess from './recess.jsx/Recess'


const Homepage = () => {
  return (
    <section className=' w-full overflow-hidden '> 



    <div className={`${styles.flexCenter} bg-pinkk z-50`}>
   <div className={`${styles.boxWidth}`}>
    <Group />
   </div>
    </div>


    <div className='md:h-[120px] pink'></div>

    <div className={`${styles.flexCenter} pink z-50 `}>
   <div className={`${styles.boxWidth}`}>
    <Choice />
    <Choicefile/>
   </div>
    </div>

    <div className='md:h-[120px] h-[80px] pink z-30'></div>
     <div>
      <Recess />
    </div> 

    <div className={`${styles.flexCenter} pink z-50 `}>
   <div className={`${styles.boxWidth}`}>
    <Order />
   </div>
    </div>

   
    

    <div className='h-[80px] pink'></div>

    <div className='h-[40px] bg-sky'></div>
    <div className={`${styles.flexCenter} bg-sky`}>
   <div className={`${styles.boxWidth}`}>
    <About />
   
   </div>
    </div>
    <div className='h-[80px] bg-sky'></div>

   

   
    </section>
  )
}

export default Homepage
