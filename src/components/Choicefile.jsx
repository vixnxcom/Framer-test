import React from 'react'
import Stat from './Stats'
import Custom from './Custom'
import Orders from './Orders'
import Recipes from './Recipes'
import styles from '../style'

const Choicefile = () => {
  return (
   
    
  
    <div className={`${styles.flexCenter}  flex flex-row gap-2 mx-auto pink grid grid-cols-2 md:h-[120vh]`}>

    <div className={`${styles.flexCenter} dusk md:h-[50vh] h-[35vh]  mt-5`}>
   <div className={`${styles.boxWidth}`}>
    <Stat />
   </div>
    </div>
    <div className={`${styles.flexCenter} dusk md:h-[50vh] h-[35vh]  mt-5`}>
   <div className={`${styles.boxWidth}`}>
    <Custom />
   </div>
    </div>

    <div className={`${styles.flexCenter} dusk md:h-[50vh] h-[35vh]  mt-5 mb-5`}>
   <div className={`${styles.boxWidth}`}>
    <Orders />
   </div>
    </div>

    <div className={`${styles.flexCenter} dusk md:h-[50vh] h-[35vh]  mt-5 mb-5`}>
   <div className={`${styles.boxWidth}`}>
    <Recipes />
   </div> 
    </div>
    
    </div>
  )
}

export default Choicefile