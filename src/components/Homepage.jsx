import React from 'react'
import Group from './Group'


import styles from '../style'
import Line from './Line'
import { logo, love } from '../assets'
import MenuP from './MenuP'
import Newmenu from './Newmenu'
import Pie from './Pie'
import Order from './Order'
import Stats from './Stats'
import Custom from './Custom'
import Orders from './Orders'
import Recipes from './Recipes'
import Choice from './Choice'
import Choicefile from './Choicefile'
import About from './aboutUs.jsx/About'
import Recess from './recess.jsx/Recess'
import Taco from './recess.jsx/Taco'
import RandomHeart from './Heart'
import Slider from './Slider'
import Slidertitle from './Slidertitle'
import Flavors from './Flavors'
import Edge from './Edge'
import Edgeblue from './Edgeblue'
import Edgepink from './Edgepink'
import Edgewhite from './Edgewhite'
import Footer from './footer.jsx/Footer'
import Clip from './Clip'
import Cloud from './footer.jsx/Cloud'
import Rain from './footer.jsx/Rain'
import Logoanin from './footer.jsx/Logoanin'


const Homepage = () => {
  return (
    <section className=' w-full overflow-hidden pink'> 



    <div className={`${styles.flexCenter} bg-pinkk z-50`}>
   <div className={`${styles.boxWidth}`}>
    <Group />
   </div>
    </div>


   {/* <RandomHeart /> */}

{/* first div */}
<div className='w-full pink'>

     <div className='md:h-[120px] yellow'></div> 
   <Edgewhite/>

    <div className={`${styles.flexCenter} yellow z-50 `}>
   <div className={`${styles.boxWidth}`}>
    <Choice />
    <Choicefile/>
    <Edgepink/>
   </div>
    </div>

    



    <div className='md:h-[120px] h-[120px] bg-pink  z-30'></div>
     <div>
      <Recess />
    </div> 


    </div> 



    <div className='md:h-[400px] bg-pink'></div>

    <div className={`${styles.flexCenter} pink z-50 `}>
   <div className={`${styles.boxWidth}`}>
    <Order />
   </div>
    </div>

   <div className='h-[55vh] pink'>
    <Taco />
   </div>
    

    <div className='h-[80px] pink'></div>

    <div>
      <Flavors />
    </div>

    {/* <div className='h-[40px] bg-sky'></div> */}
    <Edge />

    <div className={`${styles.flexCenter} green`}>
   <div className={`${styles.boxWidth}`}>
    <About />
    <Edgeblue />
   </div>
    </div>

    {/* <div className='h-[80px] bg-sky'></div> */}

    

    <div className='dusk md:h-auto   '>
  <Slidertitle />
    <Slider />
  
    <Edgepink/>
   
   </div>
   
<div className='h-[25vh] pink'>
  <Rain />
</div>

   <div className={`${styles.flexCenter} md:h-[200vh] h-[75vh] pink` }>
   <div className={`${styles.boxWidth}`}>
    
   <Logoanin />
   <Footer/>
   </div>
    </div>
   
    </section>
  )
}

export default Homepage
