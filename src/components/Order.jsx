import React from 'react'
import MenuP from './MenuP'
import styles from '../style'
import Newmenu from './Newmenu'
import Pie from './Pie'

const Order = () => {
  return (
    <section className=' w-full overflow-hidden bg-blue-400 md:h-auto h-screen '> 



    <div className={`${styles.flexCenter} `}>
   <div className={`${styles.boxWidth}`}>
    <Newmenu />
    <Pie/>
   </div>
    </div>
   

    </section >
  )
}

export default Order
