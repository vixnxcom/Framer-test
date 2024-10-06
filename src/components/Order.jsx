import React from 'react'
import MenuP from './MenuP'
import styles from '../style'
import Newmenu from './Newmenu'

const Order = () => {
  return (
    <section className=' w-full overflow-hidden bg-blue-400 '> 



    <div className={`${styles.flexCenter} `}>
   <div className={`${styles.boxWidth}`}>
    <Newmenu />
   </div>
    </div>

    </section >
  )
}

export default Order
