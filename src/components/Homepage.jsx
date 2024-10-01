import React from 'react'
import Group from './Group'

import Bag from './bag'
import styles from '../style'
import Line from './Line'
import { love } from '../assets'


const Homepage = () => {
  return (
    <section className=' w-full overflow-hidden '> 



    <div className={`${styles.flexCenter} `}>
   <div className={`${styles.boxWidth}`}>
    <Group />
   </div>
    </div>

    {/* <div className={`${styles.flexCenter} md:mt-20 pink`}>
   <div className={`${styles.boxWidth} md:mt-20`}>
    <Bag />
   </div>
    </div> */}
  

   <div className='h-[120px] pink'></div>
    </section>
  )
}

export default Homepage
