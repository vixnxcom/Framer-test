import React from 'react'
import { career, success } from '../../assets'
import styles from '../../style'

const Career = () => {
  return (
   <section className={`${styles.paddingX} flex flex-col`}>
    <div className='flex flex-row gap-4'>
       {/* img */}
       <div className='services-bg w-[120px] h-[120px] '>
        <img src={career} alt="" className=' mt-4 mx-auto' />
       </div>
       {/* img */}
       <h1 className='neue-medium text-[32px] text-white mb-4 mt-5 '>
             Career <br /> Coaching
            </h1>
     </div>
            <div className='p-2'>
           
            <p className='neue-medium text-[24px] text-white w-[370px] '>
            Guidance and strategies to navigate career transitions, develop skills, and 
            achieve professional success.

            </p>
       
    </div>
   </section>
  )
}

export default Career