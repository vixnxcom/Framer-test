import React from 'react'
import MenuP from './MenuP'
import styles from '../style'
import Newmenu from './Newmenu'
import Pie from './Pie'
import { burger } from '../assets'
import Menutitle from './Menutitle'

const Order = () => {
  return (
    <section className=' w-full overflow-hidden bg-sky md:h-auto h-[140vh] '> 



  {/* title */}
    <Menutitle />

    <Newmenu />
    <Pie/>
  
   

    </section >
  )
}

export default Order
