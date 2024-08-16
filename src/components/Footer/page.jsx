import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


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
          <Link href="/Home" className='font-semibold hover:animate-bounce hover:overline hover:text-purple-900 md:hover:text-lg hover:text-base border-r-2 border-zinc-700 pr-4'>Home</Link>
          <Link href="/About" className='font-semibold hover:animate-bounce hover:overline hover:text-purple-900 md:hover:text-lg hover:text-base border-r-2 border-zinc-700 pr-4'>About Us</Link>
          <Link href="/RaceCategories" className='font-semibold hover:animate-bounce hover:overline hover:text-purple-900 md:hover:text-lg hover:text-base border-r-2 border-zinc-700 pr-4'>Race Categories</Link>
          <Link href="/Events" className='font-semibold hover:animate-bounce hover:overline hover:text-purple-900 md:hover:text-lg hover:text-base border-r-2 border-zinc-700 pr-4'>Upcoming Events</Link>
          <Link href="" className='font-semibold hover:animate-bounce hover:overline hover:text-purple-900 md:hover:text-lg hover:text-base border-zinc-700 pr-4'>Contact Us</Link>
        </ul>
        <h2 className='font-semibold text-lg text-zinc-800 text-center mt-5 pb-3'>Venture by Deshmukh & Gholap</h2>
      </div>
    </>
  )
}

export default Page
