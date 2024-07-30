import React from 'react'
import styles from '../../style'
import { ppl } from '../../assets'

const Inspire = () => {
  return (
 <section className={`${styles.flexCenter} max-w-[520px] mx-auto `}>
<div className='max-w-sm w-[98vw]   overflow-hidden shadow-xl  mb-5 mt-5  z-[60] '>
    <div className='h-[200px]'>
    <img src={ppl} alt="" className='h-[200px] w-full object-cover' />
    </div>
    <div className={`${styles.flexCenter} flex flex-col p-4`}>
        <h1 className='galgo text-white text-7xl tracking wide'> Motivational Talks</h1>
        <p className='text-white tracking-wide text-[24px] neue-medium mt-2 mb-5'>Engaging and inspirational speeches designed to ignite passion, drive, 
and action in audiences.
</p>
    </div>
      
</div>
 </section>
  )
}

export default Inspire