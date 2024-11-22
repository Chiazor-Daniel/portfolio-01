import React from 'react'

const Profile = () => {
  return (
    <div className='w-full lg:w-[300px] bg-[#252528] backdrop-blur-lg backdrop-filter p-2 h-[auto] md:rounded-2xl flex flex-col items-center'>
    <div className='lg:p-10 flex items-center lg:flex-col gap-4'>
        <div className='relative w-[100px] md:w-[200px] lg:w-fit p-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
            <img src="buzz.jpg" className='rounded-full' />
            <div className='p-2 bg-green-400 absolute top-3 right-8 w-fit rounded-full max-sm:hidden'></div>
        </div>
        <div>
          <p className='text-slate-200 text-2xl font-bold'>Chiazor Daniel</p>
          <div className='gap-2 max-lg:flex hidden'>
          <p className='bg-[#1e1e1f] p-2 rounded-lg text-sm text-white flex items-center '>Software Developer</p>
        </div>
        </div>
        <div className='flex gap-2 max-lg:hidden'>
          <img src="code.png" className='w-10' />
          <p className='bg-[#1e1e1f] p-2 rounded-lg text-sm text-white flex items-center '>Software Developer</p>
        </div>
      <div>
        <div className='max-sm:hidden'>
          <div className='flex flex-col items-center gap-4'>
              <div className=''>
                  <img src='/message.png' className='w-[50px]'/>
              </div>
              <div>
                  <span className='text-gray-100 text-sm font-bold bg-[#1e1e1f] p-2 rounded-xl'>chiazordaniel317@gmail.com</span>
              </div>
          </div>
          <div className='flex flex-col items-center gap-4 mt-8 '>
              <div className='flex gap-4'>
                  <img src='/call.png' className='w-[40px]'/>
                  <span className='text-gray-400'>
                      .....
                  </span>
                  <img src='/tsapp.png' className='w-[40px]'/>
              </div>
              <div>
                  <span className='text-gray-100 text-sm font-bold  bg-[#1e1e1f] p-2 rounded-xl'>+234 708 154 0990</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile