import React from 'react'
import Navbar from '@/components/Navbar/page.jsx'
import Footer from '@/components/Footer/page.jsx'
import Image from 'next/image'
import { CiCalendar, CiLocationOn } from "react-icons/ci";

const page = () => {
  return (
    <>
      <div className='bg-white'>
        <div id="main" className='md:h-[80vh] h-[60vh] w-[100%] z-50 bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 85%, 50% 100%, 0% 85% , 0 0)" }}>
          <Navbar />
          <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <Image src="/image(Race).png" alt="" width={2000} height={2000} className='md:w-[65%] w-[90%] h-[60%] md:h-[90%]' />
          </div>
        </div>
        <div id='cards' className='h-auto w-[100%] bg-white flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center flex-wrap w-[100%] gap-2 md:gap-20 h-[90%] text-zinc-700'>
            {/* <Image src="/disabled.png" alt="" width={100} height={100} className='w-[25%] m-2' /> */}
            <div className='flex justify-center items-center flex-col md:flex-row w-[100%] gap-2 md:gap-20'>
              <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-3xl border-blue-200'>
                <h2 className='text-3xl font-bold'>Specialy abled</h2>
                <p className='text-lg font-semibold'>Registration fees - 300/-</p>
                <p className='text-lg font-semibold'>Cach Prize - Yes</p>
                <div>
                  <span className='font-bold my-4 flex justify-center gap-3 items-center'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiCalendar /></span>DD/MM/YY</span>
                  <span className='font-bold my-4'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiLocationOn /></span></span>
                </div>
                <button className='border-2 w-[100%] rounded-md border-blue-500 hover:font-semibold hover:bg-transparent hover:text-blue-900 p-1 px-2 bg-blue-500 text-white'>REGISTER</button>
              </div>
              <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-3xl border-fuchsia-900'>
                <h2 className='text-3xl font-bold'>5 Kms</h2>
                <p className='text-lg font-semibold'>Registration fees - 300/-</p>
                <p className='text-lg font-semibold'>Cach Prize - Yes</p>
                <div>
                  <span className='font-bold my-4 flex justify-center gap-3 items-center'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiCalendar /></span>DD/MM/YY</span>
                  <span className='font-bold my-4'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiLocationOn /></span></span>
                </div>
                <button className='border-2 w-[100%] rounded-md border-fuchsia-900 hover:font-semibold hover:bg-transparent hover:text-fuchsia-900 p-1 px-2 bg-fuchsia-900 text-white'>REGISTER</button>
              </div>
            </div>

            <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-red-600'>
              <Image src="/running (2).png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>15 Kms</h2>
              <p className='text-lg'>Registration Fees - 1600/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-red-600 hover:font-semibold hover:bg-transparent hover:text-red-600 p-1 px-2 bg-red-600 text-white'>REGISTER</button>
            </div>
            <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-pink-200'>
              <Image src="/Family.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>Family Run</h2>
              <p className='text-lg'>Registration Fees - 450/-</p>
              <p className='text-lg'>Cach Prize - No</p>
              <button className='border-2 w-[100%] rounded-md border-purple-500 hover:font-semibold hover:bg-transparent hover:text-purple-900 p-1 px-2 bg-purple-500 text-white'>REGISTER</button>
            </div>
            
            <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-red-500'>
              <Image src="/Athlete.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>10 Kms</h2>
              <p className='text-lg'>Registration Fees - 1250/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-red-500 hover:font-semibold hover:bg-transparent hover:text-red-500 p-1 px-2 bg-red-500 text-white'>REGISTER</button>
            </div>
            
            <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-purple-900'>
              <Image src="/running.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>21 Kms</h2>
              <p className='text-lg'>Registration Fees - 1800/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-purple-900 hover:font-semibold hover:bg-transparent hover:text-purple-900 p-1 px-2 bg-purple-900 text-white'>REGISTER</button>
            </div>
            <div className='w-[80%] md:w-[25%] m-1 md:m-4 p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-teal-600'>
              <Image src="/vector.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>42 Kms</h2>
              <p className='text-lg'>Registration Fees - 2050/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-teal-600 hover:font-semibold hover:bg-transparent hover:text-teal-600 p-1 px-2 bg-teal-600 text-white'>REGISTER</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default page
