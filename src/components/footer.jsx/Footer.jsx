import React from 'react'
import styles from '../../style'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} flex flex-row gap-10`}>
      <div className='w-[33vw]'>
        <Logo />
      </div>
       <div>
       <h1 className='textstyle text-white md:text-[10vw] text-8xl pop-medium   justify-end w-[33vw] '>
            CONTACT
        </h1>
       </div>
        </div>
  )
}

export default Footer