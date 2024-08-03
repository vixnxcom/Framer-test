import React from 'react'
import { lead, success } from '../../assets'
import styles from '../../style'

const Exec = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg  w-[120px] h-[120px]'>
        <img src={lead} alt="" />
       </div>
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 '>
       Executive & <br /> Leadership <br /> Coaching
            </h1>
     </div>
            <div className='p-2'>
           
            <p className='neue-medium text-[24px] text-white w-[370px] '>
           Targeted coaching for executives and leaders to 
enhance leadership skills, improve decision-making, and drive organizational success.


            </p>
       
    </div>
   </section>
  )
}

export default Exec