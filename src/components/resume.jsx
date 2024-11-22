import React from 'react';

const Resume = () => {
  return (
    <>
      <div className='w-full flex-1'>
        <h1 className='text-4xl text-white p-4 font-bold max-sm:mt-14'>Resume</h1>
        <div className='p-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-[40px] ml-4 -mt-2'></div>
        <div className='flex-1 grid items-center justify-center p-4 mt-2 gap-4 h-full'>
          <div className='h-[400px] relative'>
            <img src='resume.png' className='h-full rounded-xl'/>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-sm rounded-xl'></div>
          </div>
          <button className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-10 px-8 text-white rounded-xl m-auto'>Preview Resume</button>
        </div>
      </div>
    </>
  )
}

export default Resume;
