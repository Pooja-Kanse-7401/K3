import React from 'react'
import Navbar from '@/components/Navbar/page.jsx'
import Footer from "@/components/Footer/page.jsx"
import Image from 'next/image'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";




const Page = () => {
    return (
        <>
            <div className='bg-white text-zinc-800'>
                <div className='bg-purple-900' style={{ clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 90% , 0 0)" }}>
                    <div id="main" className='md:h-[50%] h-[60vh] w-[100%] z-50 bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 90% , 0 0)" }}>
                        <Navbar />
                        <div className='w-[100%] md:h-[100%] h-[58vh] md:mt-4 flex justify-center items-center'>
                            <Image src="/image(Events).png" alt="" width={2000} height={2000} className='md:w-[65%] w-[90%] h-[80%] md:h-[75%]' />
                        </div>
                    </div>
                    <div className='md:h-auto pb-20 h-[25vh] w-[100%] text-white bg-purple-900 flex justify-start pt-5 items-center flex-col'>
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
                <div id="main" className='flex justify-center flex-wrap items-center md:flex-row flex-col pb-20 md:pb-0 h-auto md:h-auto w-[100%]'>
                    <div className='md:w-[38%] w-[90%] h-[70vh] flex md:justify-center justify-start items-start pl-4 flex-col'>
                        <h1 className='md:text-4xl text-2xl md:my-4 mt-4 font-bold text-zinc-800'>Event Information</h1>
                        <div className='flex justify-start items-start flex-col h-[60%]'>
                            <span className='flex justify-center items-center gap-2 my-4 rounded-2xl border-2 p-2 px-4 text-purple-800 text-xl font-semibold border-purple-700'>
                                <Image src="/img1(Events).png" alt="" height={2000} width={2000} className='w-[4vh]' />
                                <button>Event type</button>
                            </span>
                            <span className='ml-10'>
                                <p className='text-xl my-3'>Race Category - <span className='font-semibold'>5 Kms</span> </p>
                                <p className='text-xl my-3'>Cash Prize - <span className='font-semibold'>Yes</span> </p>
                                <p className='text-xl my-3'>Registration Fees - <span className='font-semibold'>300/- Per Person</span> </p>
                                <p className='text-xl my-3'>Location - <span className='font-semibold'>Lorem ipsum dolor sit amet.</span> </p>
                                <p className='text-xl my-3'>Date & Time - <span className='font-semibold'>Lorem ipsum dolor sit amet.</span> </p>
                            </span>
                        </div>
                    </div>
                    <div className='relative w-[90%] md:w-[60%] md:h-auto h-[100%] z-20 mt-5 rounded-xl flex justify-center items-center'>
                        <div className='flex justify-center items-center flex-col bg-gradient-to-br from-indigo-300 via-yellow-100 to-red-300 rounded-2xl'>
                            <h1 className='md:text-4xl text-2xl font-bold text-zinc-800'>Registeration form</h1>
                            <div className='flex justify-center items-center flex-col py-4 w-[90%]'>
                                <span className='md:text-base text-xs flex justify-between items-start  md:flex-row flex-col w-[100%] gap-2 md:gap-2 my-1'>
                                    <span className='flex justify-start flex-wrap md:flex-nowrap items-center gap-2'>
                                        <input type="text" name="" id="" placeholder='Participant 1 Name' className=' w-[50%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                        <input type="number" name="" id="" placeholder='Age' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="text" name="" id="" placeholder='Gender' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Height' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Weight' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <button className='text-purple-900 text-2xl'><RiDeleteBinLine /></button>
                                    </span>
                                </span>
                                <span className='md:text-base text-xs flex justify-between items-start md:flex-row flex-col w-[100%] gap-2 md:gap-2 my-1'>
                                    <span className='flex justify-start flex-wrap md:flex-nowrap items-center gap-2'>
                                        <input type="text" name="" id="" placeholder='Participant 2 Name' className=' w-[50%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                        <input type="number" name="" id="" placeholder='Age' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="text" name="" id="" placeholder='Gender' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Height' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Weight' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <button className='text-purple-900 text-2xl'><RiDeleteBinLine /></button>
                                    </span>
                                </span>
                                <span className='md:text-base text-xs flex justify-between items-start md:flex-row flex-col w-[100%] gap-2 md:gap-2 my-1'>
                                    <span className='flex justify-start flex-wrap md:flex-nowrap items-center gap-2'>
                                        <input type="text" name="" id="" placeholder='Participant 3 Name' className=' w-[50%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                        <input type="number" name="" id="" placeholder='Age' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="text" name="" id="" placeholder='Gender' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Height' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Weight' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <button className='text-purple-900 text-2xl'><RiDeleteBinLine /></button>
                                    </span>
                                </span>
                                <span className='md:text-base text-xs flex justify-between items-start md:flex-row flex-col w-[100%] gap-2 md:gap-2 my-1'>
                                    <span className='flex justify-start flex-wrap md:flex-nowrap items-center gap-2'>
                                        <input type="text" name="" id="" placeholder='Participant 4 Name' className=' w-[50%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                        <input type="number" name="" id="" placeholder='Age' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="text" name="" id="" placeholder='Gender' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Height' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Weight' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <button className='text-purple-900 text-2xl'><RiDeleteBinLine /></button>
                                    </span>
                                </span>
                                <span className='md:text-base text-xs flex justify-between items-start md:flex-row flex-col w-[100%] gap-2 md:gap-2 my-1'>
                                    <span className='flex justify-start flex-wrap md:flex-nowrap items-center gap-2'>
                                        <input type="text" name="" id="" placeholder='Participant 5 Name' className=' w-[50%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                        <input type="number" name="" id="" placeholder='Age' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="text" name="" id="" placeholder='Gender' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Height' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <input type="number" name="" id="" placeholder='Weight' className=' w-[40%] rounded-md p-3  px-2 outline-none text-zinc-800' />
                                        <button className='text-purple-900 text-2xl'><RiDeleteBinLine /></button>
                                    </span>
                                </span>
                                <input type="number" name="" id="" placeholder='Phone' className='m-1 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                                <input type="email" name="" id="" placeholder='E-mail' className='m-1 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />

                                <span className='flex justify-start items-center w-[100%] my-1 rounded-md bg-white  px-6'>
                                    <input type="checkbox" name="" id="" className='scale-150' />
                                    <p className='md:text-zinc-700 text-zinc-900 text-sm m-4 w-[60%]'>By using this form you agree with the storage and
                                        handling of your data by this website.</p>
                                </span>

                                <button className='border rounded-md border-purple-900 p-2 px-2 text-white bg-purple-900 hover:bg-red-100 hover:text-purple-900 w-[100%] md:w-[50%] mt-4'>PROCEED FOR PAYMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info" className='flex justify-center items-center flex-col md:mx-36'>
                    <h1 className='md:text-4xl text-zinc-800 text-2xl mt-10 font-bold md:text-left text-center w-[100%]'>Check for Other Events</h1>
                    <div className='flex justify-around items-center w-[100%] m-8 text-center flex-col md:flex-row'>
                        <span className='m-4 text-zinc-800 flex justify-center items-center flex-col w-[90%] md:w-[25%]'>
                            <h1 className='text-purple-900 font-bold text-2xl'>Wrestling Championships</h1>
                            <p className='w-[80%] my-6'>provide a platform for athletes to demonstrate their skill and resilience</p>
                            <button className='border rounded-md border-purple-900 p-2 px-4 bg-purple-800 text-white hover:text-purple-900 hover:bg-red-200 font-bold hover:w-[40%] w-[90%]'>REGISTER</button>
                        </span>
                        <span className=' m-4 text-zinc-800 flex justify-center items-center flex-col w-[90%] md:w-[30%]'>
                            <h1 className='text-purple-900 font-bold text-2xl'>Defense Sessions</h1>
                            <p className='w-[100%] my-6'>Equip women with essential self-defense techniques, enhancing their confidence and personal safety</p>
                            <button className='border rounded-md border-purple-900 p-2 px-4 bg-purple-800 text-white hover:text-purple-900 hover:bg-red-200 font-bold hover:w-[40%] w-[80%]'>REGISTER</button>
                        </span>
                        <span className='m-4 text-zinc-800 flex justify-center items-center flex-col w-[90%] md:w-[25%]'>
                            <h1 className='text-purple-900 font-bold text-2xl'>Fitness Shows</h1>
                            <p className='w-[100%] my-6'>celebrate women&apos;s health and wellness, encouraging a holistic approach to fitness.</p>
                            <button className='border rounded-md border-purple-900 p-2 px-4 bg-purple-800 text-white hover:text-purple-900 hover:bg-red-200 font-bold hover:w-[40%] w-[90%]'>REGISTER</button>
                        </span>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Page
