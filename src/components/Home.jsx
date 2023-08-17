import React from 'react'
import HomePic from '../assets/images/profilepic.png'

export default function Home() {

  return (
    <>
        <main className='w-[100%] h-[100vh] bg-[#ffffff] m-5'>
          {/* Home Page Logo */}
            <p className=' h-12 text-3xl font-semibold'>Shaqqi<span className='font-bold text-[#8338ec]'>Tech</span></p>

            <div className='  w-full h-[90vh] flex flex-col md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between'>
                {/* Hokme Page Text */}
                <div className='w-full h-[40vh]  absolute  flex justify-center items-center flex-col'>
                    <h1 className='text-4xl font-bold text-[#8338ec]'>Front-End Developer</h1>
                    <h2 className='text-2xl font-semibold'>who loves to create <span className='text-3xl font-bold text-[#8338ec]'>Beautiful</span></h2>
                    <h1 className='font-semibold text-2xl'> and <span className='text-3xl font-bold text-[#8338ec]'> User-Friendly <span className='text-black font-semibold text-2xl'>Experiences.</span></span></h1>
                </div>
              {/* Home Page Profile Pic */}
                <div className='w-full h-[45vh] absolute bottom-36 flex justify-center items-end'>
                  <div className='w-72 h-72 bg-[#8338ec] rounded-full relative'>
                    <img src={HomePic} alt="Home Profile" className='w-[450px] absolute -top-6' />
                  </div>
                </div>
            </div>
        </main>
    </>
  )
}
