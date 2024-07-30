import React from 'react'
import { mind, success } from '../../assets'
import styles from '../../style'

const Mindset = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg  w-[120px] h-[120px]'>
        <img src={mind} alt="" className='mt-1'/>
       </div>
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 '>
       Mindset & <br /> Confidence <br /> Coaching
            </h1>
     </div>
            <div className='p-2'>
           
            <p className='neue-medium text-[24px] text-white w-[370px] '>
           Techniques to cultivate a positive mindset, build self-confidence,
             and overcome self-limiting beliefs.


            </p>
       
    </div>
   </section>
  )
}

export default Mindset