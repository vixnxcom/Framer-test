import React from 'react'
import Welcome from './Welcome'
import Hero from './Hero'
import Intro from './Intro'
import SecoPara from './SecoPara'

import Carousel from './Carousel'
import CarouselCard from './CarouselCard'
import Goals from './Goals'
import GoalList from './GoalList'
import Parallaximg from './Parralaximg'
import styles from '../../style'
import Team from './Team'
import Ahmed from './Ahmed'
import Kazeem from './Kazeem'
import Stat from './Stat'
import Image from './Image'
import { book } from '../../assets'
import Slider from './Slider'


const Home = () => {
  return (
    <div className='w-full overflow-hidden bg-purple' >

      {/* first bg */}

      <div className='bg-purple'>
    <div className='bg-hero bg-heroo' >
      <Welcome />
    </div>

 
    
    <div className=' mt-5'>
    {/* <div className='bg-curve p-2 z-[999]'>

    </div> */}
 <div className='bg-curvebook '>
  <Intro />
  <img src={book} alt="" className='w-full h-[400px] mx-auto max-w-[800px] ' />
  <div className={`${styles.flexCenter} md:w-[800px] xs:w-[470px]  p-6 pbox track mx-auto `}>
  <p className='text-[24px] neue-thin mt-5 p-2 mb-5'>
    
    With a
    dedicated team of seasoned coaches, mentors, consultants, and speakers,
            </p>
      
  </div>
</div> 


 <div className='bg-intro mt-5'>
  <div className={`${styles.flexCenter}  p-6 pbox track `}>
  <h2 className={`${styles.flexStart} galgo text-8xl tracking-wide text-start mt-10 md:w-[800px] xs:w-[470px] ` }>
        we are committed to delivering tailored
        </h2>

        
  </div>
  <SecoPara />
</div> 
    </div>

    <div className='bg-purple mt-10 '>
 <Parallaximg />
 </div>
    </div>


    {/* second bg */}


 <div className='bg-purple'>
  <div>
    
  <h2 className={`${styles.flexStart} galgo text-8xl text-white tracking-wide mt-20` }>
  <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4'></span>
      Our Goals
        </h2>
  </div>
  <div>
  <GoalList />
 </div>
 </div>
 
{/* third bg */}
 <div className='bg-purple mx-auto'>


   <div className=''>
    <h2 className={`${styles.flexStart} galgo text-8xl text-white our tracking-wide mt-20 ` }>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 '></span>
        Our Team Lead
     </h2>
    </div>


<div className={`${styles.flexCenter} `}>
 <Kazeem/>
 </div>


 <div className=''>
    <h2 className={`${styles.flexStart} galgo text-8xl text-white our tracking-wide mt-20  ` }>
    <span className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 '></span>
       Our Reviews
     </h2>
     <p className={`${styles.flexCenter} text-white our tracking-wide mt-5 mt-5 neue-thin text-[28px] `}>What poeple are saying about us</p>
    </div>

<div className='bg-purple mt-10 mb-10'>
  <div className='bg-purple h-[20px]'></div>
  <Slider />
  <div className='bg-purple h-[20px]'></div>
</div>


</div> 
{/* third bg */}









    </div>
  )
}

export default Home