import React from 'react'
import Navbar from '@/components/Navbar/page.jsx'
import Footer from '@/components/Footer/page.jsx'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import Image from 'next/image'
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const Page = () => {
  return (
    <>
      <div className='bg-white'>
        <div id='main' className=' md:h-auto h-[60vh] w-[100%] z-50 bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 90% , 0 0)" }}>
          <Navbar />

          <div className='w-[100%] md:h-[70vh] h-[50vh] flex justify-center items-center'>
            <Image src="/image(about).png" alt="" width={2000} height={2000} className='md:w-[65%] w-[90%] h-[80%] md:h-[80%]' style={{ clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 90% , 0 0)" }} />
          </div>
        </div>
        <div id="contactForm" className='py-12 h-auto w-[100%] flex justify-center items-center md:flex-row flex-col text-zinc-900'>
          <div className='z-20 h-[90%] w-[90%] md:w-[40%] md:pt-20'>
            <h1 className='md:text-4xl text-3xl md:my-4 mt-4 font-bold text-zinc-800'>Reach out to us</h1>
            <p className='md:w-[76%] my-3 w-[100%] font-semibold'>Have question or Queries? We are here to help. Send a message to us and we’ll respond in 24hrs.</p>
            <form action="">
              <input type="text" name="" id="" placeholder='First Name' className='md:mt-6 mt-4 md:w-[85%] w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950 border-b-2 border-zinc-800 shadow-md bg-zinc-50' />
              <input type="text" name="" id="" placeholder='Last Name' className='md:mt-6 mt-4 md:w-[85%] w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950 border-b-2 border-zinc-800 shadow-md bg-zinc-50' />
              <input type="email" name="" id="" placeholder='E-mail' className='md:mt-6 mt-4 md:w-[85%] w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800 border-b-2 border-zinc-800 shadow-md bg-zinc-50' />
              <input type="number" name="" id="" placeholder='Phone' className='md:mt-6 mt-4 md:w-[85%] w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950 border-b-2 border-zinc-800 shadow-md bg-zinc-50' />
              <textarea name="" id="" cols="30" rows="5" placeholder='Leave a message' className='resize-none md:mt-6 mt-4 md:w-[85%] w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950 border-b-2 border-zinc-800 shadow-md bg-zinc-50'></textarea>
            </form>
          </div>
          <div className='relative h-[90%] w-[90%] md:w-[40%] flex justify-center items-start flex-col text-purple-900 md:pl-20 py-4'>
            <Image src="/image(Contact).jpg" alt="" width={2000} height={2000} className='-skew-x-12 -rotate-12 w-[100%] md:relative absolute bottom-10' />
            <span className='mt-20 text-5xl gap-8 flex items-center z-20 bg-white/30 w-[100%] p-2'>
              <IoCallOutline />
              <p className='text-2xl font-bold text-zinc-800'>+91-9604478983</p>
            </span>
            <span className='mt-20 text-5xl gap-8 flex items-center z-20 bg-white/30 w-[100%] p-2'>
              <MdMailOutline />
              <p className='text-2xl font-bold text-zinc-800'> </p>
            </span>
          </div>
        </div>
        <div id='contactFooter' className='h-auto pb-10 w-[100%] bg-red-200'>
          <div className='md:h-auto py-10 h-[40vh] w-[100%] bg-purple-900 flex justify-start pt-5 items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 65%, 50% 100%, 0% 65% , 0 0)" }}>
            <h1 className='md:text-4xl text-xl text-center font-bold'>Do Join Us with Our Upcoming Event!!!</h1>
            <span className='flex justify-between items-center gap-2 w-[80%] md:w-[60%] mt-[4%]'>
              <p className='md:text-2xl text-md font-semibold'>Upcoming Event: </p>
              <ul className='flex justify-between items-center w-[35%] mr-[20%] md:mr-[40%]'>
                <li className='md:text-4xl text-2xl font-bold'><CiCalendar /></li>
                <li className='md:text-4xl text-2xl font-bold'><CiLocationOn /></li>
              </ul>
            </span>
            <button className='border rounded-md border-purple-900 p-2 px-4 mt-10 bg-white text-purple-900 hover:bg-red-200 font-bold'>REGISTER</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page;
