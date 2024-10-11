import React from 'react'
import styles from '../../style'

const Bio = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.flexCenter} text-[6vw] pop-medium text-white flex flex-col md:w-[800px] w-[470px] mx-auto`}>
            <h1>Churros</h1>
            <p className='text-[5vw] neue-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Architecto eligendi eveniet quis repellendus itaque aperiam 
                 magnam molestiae, corporis quam voluptatum!</p>
        </div>
    </div>
  )
}

export default Bio