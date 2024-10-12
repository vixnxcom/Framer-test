import React from 'react'
import styles from '../../style'
import Image from './Image'
import { petal } from '../../assets'

const Bio = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
        <div className={`${styles.flexCenter} flex flex-col md:w-[800px] w-[380px] mx-auto`}>
            <div className='text-[8vw] pop-medium text-white flex flex-row'>
            <h1>Churros</h1>
            <img src={petal} alt="" className='md:w-50 w-[40%]' />
            </div>
            <p className='text-[5vw] neue-medium p-2 '>

Welcome to Churros, where organic goodness meets uncompromising quality. We believe that what you eat should nourish
both your body and the planet. That’s why we’re committed to offering products that are not only delicious but also
 grown with care for the environment, ensuring that you can enjoy clean, healthy food without compromise.</p>
        </div>



      <Image />
    </div>

    
  )
}

export default Bio