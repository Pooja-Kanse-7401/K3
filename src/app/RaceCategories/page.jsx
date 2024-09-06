import React from 'react'
import Navbar from '@/components/Navbar/page.jsx'
import Footer from '@/components/Footer/page.jsx'
import Image from 'next/image'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import '@/app/RaceCategories/style.css'

const page = () => {
  return (
    <>
      <div className='bg-white'>
        <div id="main" className='md:h-auto h-[65vh] w-[100%] bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 90% , 0 0)" }}>
          <Navbar />
          <div className='w-[100%] md:h-auto h-[55vh] mt-10 flex justify-center items-center'>
            <Image src="/image(Race).png" alt="" width={2000} height={2000} className='md:w-[65%] w-[90%] h-[80%] md:h-auto' />
          </div>
        </div>
        <div id='cards' className='m-5 h-auto w-[90%] bg-white flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center flex-wrap w-[100%] gap-2 md:gap-20 h-auto text-zinc-700'>
            <div className='flex justify-center items-center flex-col md:flex-row w-[100%] gap-2 md:gap-20'>

              <div className='CardBody md:w-[25%] w-[100%] h-auto relative flex justify-center items-center'>
                <div className='Front w-[80%] md:w-[100%] h-[100%] m-1 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-3xl border-blue-200'>
                  <h2 className='text-3xl font-bold'>Specialy abled</h2>
                  <p className='text-lg font-semibold'>Registration fees - 300/-</p>
                  <p className='text-lg font-semibold'>Cach Prize - Yes</p>
                  <div>
                    <span className='font-bold my-4 flex justify-center gap-3 items-center'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiCalendar /></span>DD/MM/YY</span>
                    <span className='font-bold my-4'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiLocationOn /></span></span>
                  </div>
                  <button className='border-2 w-[100%] rounded-md border-blue-500 hover:font-semibold hover:bg-transparent hover:text-blue-900 p-1 px-2 bg-blue-500 text-white'>REGISTER</button>
                </div>
                <div className='Back transition-transform ease-in-out duration-700 w-[80%] absolute top-0 md:w-[100%] h-[100%] rounded-3xl border-8 border-blue-400 bg-blue-200 flex justify-center items-center flex-col'>
                  <Image src="/disabled.png" alt="" width={100} height={100} className='w-[25%] m-2' />
                  <h2 className='text-3xl font-bold text-center'>Specialy abled</h2>
                </div>
              </div>


              <div className='CardBody md:w-[25%] w-[100%] h-auto relative flex justify-center items-center'>
                <div className='Front w-[80%] md:w-[100%] h-[100%] m-1 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-3xl border-fuchsia-900'>
                  <h2 className='text-3xl font-bold'>5 Kms</h2>
                  <p className='text-lg font-semibold'>Registration fees - 300/-</p>
                  <p className='text-lg font-semibold'>Cach Prize - Yes</p>
                  <div>
                    <span className='font-bold my-4 flex justify-center gap-3 items-center'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiCalendar /></span>DD/MM/YY</span>
                    <span className='font-bold my-4'><span className='font-bold md:text-4xl text-2xl text-purple-900'><CiLocationOn /></span></span>
                  </div>
                  <button className='border-2 w-[100%] rounded-md border-fuchsia-900 hover:font-semibold hover:bg-transparent hover:text-fuchsia-900 p-1 px-2 bg-fuchsia-900 text-white'>REGISTER</button>
                </div>
                <div className='Back transition-transform ease-in-out duration-700 w-[80%] absolute top-0 md:w-[100%] h-[100%] rounded-3xl bg-fuchsia-300 border-8 border-fuchsia-900 flex justify-center items-center flex-col'>
                  <Image src="/Jogging.png" alt="" width={100} height={100} className='w-[25%] m-2 text-center' />
                  <h2 className='text-3xl text-fuchsia-900 font-bold text-center'>Specialy abled</h2>
                </div>
              </div>
            </div>



            <div className='CardBody relative w-[80%] md:w-[25%] h-auto'>
              <div className='w-[100%] h-[100%] p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-red-600'>
                <Image src="/running (2).png" alt="" width={100} height={100} className='w-[25%] m-2' />
                <h2 className='text-2xl font-bold'>15 Kms</h2>
                <p className='text-lg'>Registration Fees - 1600/-</p>
                <p className='text-lg'>Cach Prize - Yes</p>
                <button className='border-2 w-[100%] rounded-md border-red-600 hover:font-semibold hover:bg-transparent hover:text-red-600 p-1 px-2 bg-red-600 text-white'>REGISTER</button>
              </div>
              <div className='Back transition-transform ease-in-out duration-700 absolute top-0 w-[100%] h-[100%] rounded-3xl bg-red-200 border-8 border-red-600 flex justify-center items-center flex-col'>
                <Image src="/running (2).png" alt="" width={100} height={100} className='w-[25%] m-2 text-center' />
                <h2 className='text-3xl text-red-600 font-bold text-center'>15 Kms</h2>
              </div>
            </div>

            <div className='CardBody relative w-[80%] md:w-[25%] h-auto'>
              <div className='w-[100%] h-[100%] p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-pink-200'>
                <Image src="/Family.png" alt="" width={100} height={100} className='w-[25%] m-2' />
                <h2 className='text-2xl font-bold'>Family Run</h2>
                <p className='text-lg'>Registration Fees - 450/-</p>
                <p className='text-lg'>Cach Prize - No</p>
                <button className='border-2 w-[100%] rounded-md border-purple-500 hover:font-semibold hover:bg-transparent hover:text-purple-900 p-1 px-2 bg-purple-500 text-white'>REGISTER</button>
              </div>
              <div className='Back transition-transform ease-in-out duration-700 absolute top-0 w-[100%] h-[100%] rounded-3xl bg-fuchsia-300 border-8 border-pink-200 flex justify-center items-center flex-col'>
                <Image src="/Family.png" alt="" width={100} height={100} className='w-[25%] m-2 text-center' />
                <h2 className='text-3xl text-purple-500 font-bold text-center'>15 Kms</h2>
              </div>
            </div>

            <div className='CardBody relative w-[80%] md:w-[25%] h-auto'>
            <div className='w-[100%] h-[100%] p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-red-500'>
              <Image src="/Athlete.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>10 Kms</h2>
              <p className='text-lg'>Registration Fees - 1250/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-red-500 hover:font-semibold hover:bg-transparent hover:text-red-500 p-1 px-2 bg-red-500 text-white'>REGISTER</button>
            </div>
            <div className='Back transition-transform ease-in-out duration-700 absolute top-0 w-[100%] h-[100%] rounded-3xl bg-orange-200 border-8 border-red-500 flex justify-center items-center flex-col'>
                <Image src="/Athlete.png" alt="" width={100} height={100} className='w-[25%] m-2 text-center' />
                <h2 className='text-3xl text-orange-600 font-bold text-center'>10 Kms</h2>
              </div>
            </div>

            <div className='CardBody relative w-[80%] md:w-[25%] h-auto'>
            <div className='w-[100%] h-[100%] p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-purple-900'>
              <Image src="/running.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>21 Kms</h2>
              <p className='text-lg'>Registration Fees - 1800/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-purple-900 hover:font-semibold hover:bg-transparent hover:text-purple-900 p-1 px-2 bg-purple-900 text-white'>REGISTER</button>
            </div>
            <div className='Back transition-transform ease-in-out duration-700 absolute top-0 w-[100%] h-[100%] rounded-3xl bg-purple-300 border-8 border-purple-900 flex justify-center items-center flex-col'>
                <Image src="/running.png" alt="" width={100} height={100} className='w-[25%] m-2 text-center' />
                <h2 className='text-3xl text-purple-900 font-bold text-center'>10 Kms</h2>
              </div>
            </div>

            <div className='CardBody relative w-[80%] md:w-[25%] h-auto'>
            <div className='w-[100%] h-[100%] p-2 px-4 gap-6 flex justify-center items-center flex-col border-8 rounded-3xl border-teal-600'>
              <Image src="/vector.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>42 Kms</h2>
              <p className='text-lg'>Registration Fees - 2050/-</p>
              <p className='text-lg'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-teal-600 hover:font-semibold hover:bg-transparent hover:text-teal-600 p-1 px-2 bg-teal-600 text-white'>REGISTER</button>
            </div>
            <div className='Back transition-transform ease-in-out duration-700 absolute top-0 w-[100%] h-[100%] rounded-3xl bg-teal-100 border-8 border-teal-600 flex justify-center items-center flex-col'>
                <Image src="/vector.png" alt="" width={100} height={100} className='w-[25%] m-2 text-center' />
                <h2 className='text-3xl text-teal-600 font-bold text-center'>10 Kms</h2>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default page
