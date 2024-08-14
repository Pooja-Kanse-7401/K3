import React from 'react'
import Image from 'next/image'


const Page = () => {
  return (
    <>
      <div className='w-[100%] bg-white shadow-inner shadow-fuchsia-900'>
        <ul className='flex justify-center items-center gap-2 text-purple-900 pt-5'>
          <li className='text-sm font-semibold text-center'>
            <p>Powered By Unity</p>
            <p>Driven By Trust</p>
          </li>
          <li><Image src="/logo.png" alt="" width={200} height={200} className='h-[10vh] w-[10vh]' /></li>
        </ul>
        <ul className='flex justify-center items-center gap-5 text-zinc-700 md:text-lg text-sm flex-wrap mt-2 md:mt-6'>
          <li className='font-semibold border-r-2 border-zinc-700 pr-4'>Home</li>
          <li className='font-semibold border-r-2 border-zinc-700 pr-4'>About Us</li>
          <li className='font-semibold border-r-2 border-zinc-700 pr-4'>Race Categories</li>
          <li className='font-semibold border-r-2 border-zinc-700 pr-4'>Upcoming Events</li>
          <li className='font-semibold border-zinc-700 pr-4'>Contact Us</li>
        </ul>
        <h2 className='font-semibold text-lg text-zinc-800 text-center mt-5 pb-3'>Venture by Deshmukh & Gholap</h2>
      </div>
    </>
  )
}

export default Page
