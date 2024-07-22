import React from 'react'
import Head from './Head'
import Secondp from './Secondp'
import { Box } from './Box'
import styles from '../../style'
import Guiding from './Guiding'
import { emp } from '../../assets'
import Guidingtwo from './Guidingtwo'
import Cardtwo from './Cardtwo'

const About = () => {
  return (
    <section>
    <div className='w-full overflow-hidden bg-black' >

      <div className='bg-purplee h-[420px]' >
      <Head />
    </div>

    <div className='bg-white'>
      <Secondp />
    </div>

     <div className='bg-black h-[500px] '>
     <div className='bg-box'>
      <Box />
     </div>
     </div>

        <div className='bg-purple'>
        <div className=''>
    
    <h2 className={`${styles.flexStart} galgo text-8xl text-white tracking-wide p-8` }>
       <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
      Guiding Principles
        </h2>
        </div>
        <div className='bg-curve'>
       <Guiding />
       </div>
    
        </div>
   
      {/* image */}
      <div className='bg-purple h-[40px] '></div>

      <div className='bg-white p-2 '>
        <img src={emp} alt="" className='md:w-[50%] w-[96%] mx-auto'/>
       </div>
       {/* image */}

       <div className='bg-white'>
       <Guidingtwo />
       </div>

    

     </div>
    
     <div className='bg-curvee  '>
      
        <Cardtwo />
       </div>
     </section>
  )
}

export default About