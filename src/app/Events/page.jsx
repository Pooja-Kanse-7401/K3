import React from 'react'
import Navbar from '@/components/Navbar/page.jsx'
import Footer from "@/components/Footer/page.jsx"
import Image from 'next/image'
import { CiCalendar, CiLocationOn } from "react-icons/ci";



const Page = () => {
    return (
        <>
            <div className='bg-white text-zinc-800'>
                <div className='bg-purple-900' style={{ clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 90% , 0 0)" }}>
                    <div id="main" className='md:h-[80vh] h-[60vh] w-[100%] z-50 bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 85%, 50% 100%, 0% 85% , 0 0)" }}>
                        <Navbar />
                        <div className='w-[100%] h-[100%] flex justify-center items-center'>
                            <Image src="/image(Events).png" alt="" width={2000} height={2000} className='md:w-[65%] w-[90%] h-[80%] md:h-[95%]' />
                        </div>
                    </div>
                    <div className='md:h-[30vh] h-[25vh] w-[100%] text-white bg-purple-900 flex justify-start pt-5 items-center flex-col'>
                        <h1 className='md:text-4xl text-xl text-center font-bold'>Do Join Us with Our Upcoming Event!!!</h1>
                        <span className='flex justify-between items-center gap-2 w-[80%] md:w-[60%] mt-[2%]'>
                            <p className='md:text-2xl text-md font-semibold'>Upcoming Event: </p>
                            <ul className='flex justify-between items-center w-[35%] mr-[20%] md:mr-[40%]'>
                                <li className='md:text-4xl text-2xl font-bold'><CiCalendar /></li>
                                <li className='md:text-4xl text-2xl font-bold'><CiLocationOn /></li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div id="main" className='flex justify-center items-center md:flex-row flex-col pb-20 gap-3 md:pb-0 h-auto md:h-[120vh] w-[100%]'>
                    <div className='md:w-[40%] w-[90%] md:h-[90%] h-[50vh] flex justify-start items-start pl-4 flex-col'>
                        <h1 className='md:text-4xl text-2xl md:my-4 mt-4 font-bold text-zinc-800'>Event Information</h1>
                        <div className='flex justify-around items-start flex-col h-[60%]'>
                        <span className='flex justify-center items-center gap-2 rounded-2xl border-2 p-2 px-4 text-purple-800 text-xl font-semibold border-purple-700'>
                            <Image src="/img1(Events).png" alt="" height={2000} width={2000} className='w-[4vh]'/>
                            <button>Event type</button>
                        </span>
                        <span className='flex justify-center items-center gap-2 rounded-2xl border-2 p-2 px-4 text-purple-800 text-xl font-semibold border-purple-700'>
                            <Image src="/img2(Events).png" alt="" height={2000} width={2000} className='w-[4vh]'/>
                            <button>Registration fees</button>
                        </span>
                        </div>
                    </div>
                    <div className='relative w-[90%] md:w-[40%] md:h-[90%] h-[100vh] z-20 rounded-xl flex justify-center items-center'>
                        <div className='h-[100%]'>
                            <Image src="/Overlay.png" alt="" width={1000} height={1000} className='md:h-[100%] h-[110%] w-[100%]' />
                        </div>
                        <div className='flex justify-start items-center flex-col absolute top-0 left-0'>
                            <h1 className='md:text-4xl text-2xl md:my-4 mt-4 font-bold text-zinc-800'>Registeration form</h1>
                            <div className='flex justify-center items-center flex-col md:py-4 w-[80%]'>
                                <input type="text" name="" id="" placeholder='Name' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                <input type="number" name="" id="" placeholder='Phone' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                <input type="email" name="" id="" placeholder='E-mail' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                                <span className='flex justify-between items-center w-[100%] gap-6 md:gap-4 my-2'>
                                    <input type="number" name="" id="" placeholder='Age' className=' w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                                    <input type="text" name="" id="" placeholder='Gender' className=' w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                                </span>
                                <span className='flex justify-between items-center w-[100%] gap-6 md:gap-4 my-2'>
                                    <input type="number" name="" id="" placeholder='Height' className=' w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                                    <input type="number" name="" id="" placeholder='Weight' className=' w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                                </span>
                                <textarea name="" id="" rows={5} className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800 '></textarea>
                                <span className='flex justify-center items-center w-[95%]'>
                                    <input type="checkbox" name="" id="" className='p-6' />
                                    <p className='md:text-zinc-700 text-zinc-900 text-sm m-2'>By using this form you agree with the storage and
                                        handling of your data by this website.</p>
                                </span>
                                <button className='border rounded-md border-purple-900 p-1 px-2 text-white bg-purple-900 hover:bg-red-200 hover:text-purple-900 w-[100%] mt-2'>REGISTER</button>
                                <button className='border rounded-md border-purple-900 p-1 px-2 text-white bg-purple-900 hover:bg-red-200 hover:text-purple-900 w-[100%] mt-2'>ADD MORE MEMBER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Page
