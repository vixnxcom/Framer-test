import React from 'react';
import Cloud from './Cloud';

const Rain = () => {
  return (
    <div className='relative flex justify-center items-center h-[30vh] w-full pink'>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <Cloud />
      </div>
      <h1 className='absolute text-[12vw] text-center z-50 pop-medium text-green text'>
        Churros
      </h1>
    </div>
  );
};

export default Rain;
