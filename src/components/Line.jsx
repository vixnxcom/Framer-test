import React from 'react'
import { arrow } from '../assets'

const Line = () => {
  return (
    <div className=' flex justify-center z-[999] bg-white w-[90vw] h-[auto] mx-auto'>
      <div className='flex flex-row mx-auto'>
        <h1 className='text-yellow-400 text-[6vw] text-center mt-1 p-2 mx-4'>
            Lets eat Cake
        </h1>
        <button>
            <img src={arrow} alt="" className='w-[35%] p-1' />
        </button>
      </div>
    </div>
  )
}

export default Line
