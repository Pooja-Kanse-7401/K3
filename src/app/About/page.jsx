import React from 'react'
import Image from 'next/image'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import Navbar from "@/components/Navbar/page.jsx"
import Footer from "@/components/Footer/page.jsx"



const Page = () => {

    return (
        <>
            <div className='bg-white'>
                <div id='main' className='md:h-[100vh] h-[60vh] w-[100%] z-50 bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 95%, 50% 100%, 0% 95% , 0 0)" }}>
                    <Navbar/>

                    <div className='w-[100%] h-[80%] flex justify-center items-center'>
                        <Image src="/image(about).png" alt="" width={2000} height={2000} className='md:w-[65%] w-[90%] h-[60%] md:h-[80%]' />
                    </div>
                </div>
                <div id="vision" className='w-[100%] md:h-[90vh] text-zinc-800 flex justify-evenly items-center flex-col'>
                    <div className='md:w-[70%] w-[90%] flex justify-start items-center flex-col'>
                        <h1 className='md:text-4xl text-2xl mt-10 font-bold text-center'>K3&apos;s Vision</h1>
                        <p className='m-5 md:text-base text-sm'>
                            At K3, Our vision is to inspiring and empowering young individuals to excel in marathons and body shows. Our mission is to provide a platform where contestants can showcase their strength, talent, and determination across various sports disciplines. We strive to create opportunities for youth to reach their full potential, encouraging them to achieve personal and athletic excellence. Through our programs, we aim to foster a community of passionate and driven athletes who are ready to blaze a trail of success and inspire others along the way.
                        </p>
                    </div>
                    <div className='md:w-[80%] w-[90%]'>
                        <h1 className='md:text-4xl text-2xl m-10 font-bold text-center'>K3&apos;s Mission</h1>
                        <ul className='flex justify-around items-center flex-wrap md:my-10'>
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Inspire Excellence</li>
                            <hr className='md:w-[2px] md:h-[4vh] bg-zinc-700' />
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Provide Opportunities</li>
                            <hr className='md:w-[2px] md:h-[4vh] bg-zinc-700' />
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Foster Community</li>
                            <hr className='md:w-[2px] md:h-[4vh] bg-zinc-700' />
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Promote Health and Fitness</li>
                        </ul>
                        <ul className='flex justify-around items-center flex-wrap md:my-10'>
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Develop Skills</li>
                            <hr className='md:w-[2px] md:h-[4vh] bg-zinc-700' />
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Encourage Sportmanship</li>
                            <hr className='md:w-[2px] md:h-[4vh] bg-zinc-700' />
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Support Growth</li>
                            <hr className='md:w-[2px] md:h-[4vh] bg-zinc-700' />
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Celebrate Achievements</li>
                        </ul>
                        <ul className='flex justify-center items-center'>
                            <li className='md:text-xl hover:underline underline-offset-8 m-2 w-[90%] md:w-[20%] text-center'>Innovate Programs</li>
                        </ul>
                    </div>
                </div>
                <div id='events' className='h-[45vh] w-[100%] bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 70%, 50% 100%, 0% 70% , 0 0)" }}>
                    <div className='md:h-[40vh] h-[40vh] w-[100%] bg-purple-900 flex justify-start pt-5 items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 65%, 50% 100%, 0% 65% , 0 0)" }}>
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
                <div id="info" className='flex justify-center items-center flex-col'>
                    <h1 className='md:text-4xl text-zinc-800 text-2xl mt-10 font-bold text-center'>K3&apos;s Vision</h1>
                    <p className='md:w-[50%] w-[90%] text-md text-zinc-700 md:text-xl font-semibold m-4 text-center'>K3 is dedicated to promoting fitness and athleticism among the youth by organizing a variety of events. Alongside marathon races, K3 conducts following shows specifically tailored for women</p>
                    <div className='flex justify-around items-center w-[80%] m-8 text-center flex-col md:flex-row'>
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
                
                <Footer/>
            </div>
        </>
    )
}

export default Page
