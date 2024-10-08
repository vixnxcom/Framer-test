import React from 'react'
import MenuP from './MenuP'
import styles from '../style'
import Newmenu from './Newmenu'
import Pie from './Pie'

const Order = () => {
  return (
    <section className=' w-full overflow-hidden bg-green md:h-auto h-[130vh] '> 



  {/* title */}
  <h1 className={`${styles.flexCenter}   pop-bold text-6xl justify-center items-center mx-auto text-white mt-10`}>
    Menu
  </h1>
  {/* title */}

    <Newmenu />
    <Pie/>
  
   

    </section >
  )
}

export default Order
