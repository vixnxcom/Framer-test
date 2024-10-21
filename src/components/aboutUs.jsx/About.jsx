import React from 'react'
import Bio from './Bio'
import Abouttitle from './Abouttitle'

const About = () => {
  return (
    <section className='w-full min-h-screen   overflow-hidden mb-10'>
        
        <Abouttitle />
        <Bio />
    </section>
  )
}

export default About