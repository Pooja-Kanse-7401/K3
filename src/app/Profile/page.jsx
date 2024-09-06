import React from 'react'
import Navbar from '@/components/Navbar/page.jsx'
import Footer from '@/components/Footer/page.jsx'
import Image from 'next/image'
import { RxPencil1 } from "react-icons/rx";

const Page = () => {
  return (
    <>
      <div className='bg-red-200'>
        <Navbar />
        <div className='flex justify-center items-center w-[100%] pt-20'>
          <div className='h-auto pb-20 w-[100%] md:w-[80%] flex justify-start items-start flex-col'>
            <h1 className='text-4xl text-zinc-900 font-bold m-2'>My Profile</h1>
            <div className='h-[60vh] md:w-[100%] w-[90%] ml-4 md:ml-0 bg-white rounded-3xl my-6 p-6 shadow-2xl'>
              <div className='relative w-[15vh] h-[15vh]'>
                <Image src="" alt="" height={3000} width={3000} className='w-[15vh] h-[15vh] rounded-full border-4 border-purple-900' />
                <RxPencil1 className='rounded-full p-1 bg-purple-900 text-3xl absolute left-20 bottom-2' />
              </div>
              <p className='font-bold text-zinc-900 my-6 text-base md:text-xl'>User Name - Lorem Ipsum</p>
              <p className='font-bold text-zinc-900 my-6 text-base md:text-xl'>Email address - Lorem Ipsum</p>
              <p className='font-bold text-zinc-900 my-6 text-base md:text-xl'>Phone Number - Lorem Ipsum</p>
              <button className='border rounded-md border-purple-900 md:p-2 p-1 px-2 text-white bg-purple-900 hover:bg-red-100 hover:text-purple-900 w-[70%] md:w-[16%] mt-2 mdmt-4'>Change Password</button>
            </div>

            <h1 className='text-4xl text-zinc-900 font-bold my-4 mt-10 m-2'>My Bookings</h1>
            <table className='md:w-[100%] w-[90%] ml-4 md:ml-0 bg-white text-zinc-800 text-center'>
              <tr className='bg-purple-900 text-white md:text-base text-xs'>
                <th className='text-center p-2'>Name</th>
                <th className='text-center p-2'>Event Type</th>
                <th className='text-center p-2'>Category</th>
                <th className='text-center p-2'>Date</th>
                <th className='text-center p-2'>Location</th>
              </tr>
              <tr className='border-b-2 border-zinc-600 md:text-base text-xs'>
                <td className='p-2 font-semibold'>Lorem Ipsum</td>
                <td className='p-2 font-semibold'>Race</td>
                <td className='p-2 font-semibold'>5 Km</td>
                <td className='p-2 font-semibold'>30-09-2024</td>
                <td className='p-2 font-semibold'>Kalyani Nagar</td>
              </tr>
              <tr className='border-b-2 border-zinc-600 md:text-base text-xs'>
                <td className='p-2 font-semibold'>Lorem Ipsum</td>
                <td className='p-2 font-semibold'>Race</td>
                <td className='p-2 font-semibold'>5 Km</td>
                <td className='p-2 font-semibold'>30-09-2024</td>
                <td className='p-2 font-semibold'>Kalyani Nagar</td>
              </tr>
              <tr className='border-b-2 border-zinc-600 md:text-base text-xs'>
                <td className='p-2 font-semibold'>Lorem Ipsum</td>
                <td className='p-2 font-semibold'>Race</td>
                <td className='p-2 font-semibold'>5 Km</td>
                <td className='p-2 font-semibold'>30-09-2024</td>
                <td className='p-2 font-semibold'>Kalyani Nagar</td>
              </tr>
              <tr className='border-b-2 border-zinc-600 md:text-base text-xs'>
                <td className='p-2 font-semibold'>Lorem Ipsum</td>
                <td className='p-2 font-semibold'>Race</td>
                <td className='p-2 font-semibold'>5 Km</td>
                <td className='p-2 font-semibold'>30-09-2024</td>
                <td className='p-2 font-semibold'>Kalyani Nagar</td>
              </tr>
              <tr className='border-b-2 border-zinc-600 md:text-base text-xs'>
                <td className='p-2 font-semibold'>Lorem Ipsum</td>
                <td className='p-2 font-semibold'>Race</td>
                <td className='p-2 font-semibold'>5 Km</td>
                <td className='p-2 font-semibold'>30-09-2024</td>
                <td className='p-2 font-semibold'>Kalyani Nagar</td>
              </tr>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
