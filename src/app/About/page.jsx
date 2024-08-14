"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaXmark, FaBars } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { CiCalendar, CiLocationOn } from "react-icons/ci";



const page = () => {

    const [navOpen, setNavOpen] = useState()


    const toggleNav = () => {
        setNavOpen(!navOpen)
    }


    return (
        <>
            <div className='bg-white'>
                <main className='md:h-[100vh] h-[60vh] w-[100%] z-50 bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 95%, 50% 100%, 0% 95% , 0 0)" }}>
                    <nav className='flex justify-center items-center flex-col'>
                        <div id="navBar" className=' text-purple-900 flex justify-around items-center h-[10vh] shadow shadow-fuchsia-900 w-[100%] gap-1 md:gap-80'>
                            <ul className='flex justify-center items-center gap-2'>
                                <li className='md:text-sm text-xs font-semibold text-center'>
                                    <p>Powered By Unity</p>
                                    <p>Driven By Trust</p>
                                </li>
                                <li><Image src="/logo.png" alt="" width={200} height={200} className='md:w-[10vh] w-[8vh] ' /></li>
                            </ul>
                            <ul className='flex justify-center items-center gap-1 md:gap-4'>
                                <li className='text-lg md:block hidden '><FaFacebookF /></li>
                                <li className='text-lg md:block hidden '><FaTwitter /></li>
                                <li className='text-lg md:block hidden '><AiFillInstagram /></li>
                                <button className='border text-sm rounded-md border-purple-900 p-1 px-2 hover:bg-purple-900 hover:text-white'>LOGIN</button>
                                <button className='border text-sm rounded-md border-purple-900 p-1 px-2 hover:bg-purple-900 hover:text-white'>SIGNUP</button>

                                <button onClick={toggleNav} className='text-2xl m-2 md:hidden block'>
                                    {navOpen ? <FaXmark /> : <FaBars />}
                                </button>

                            </ul>
                        </div>
                        <div id="sideNav" className='md:flex z-20 hidden justify-around items-center w-[100%] mt-5'>
                            <ul className='flex justify-center items-center flex-wrap gap-1 md:gap-5 '>
                                <li className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Home</li>
                                <li className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>About Us</li>
                                <li className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Race Categories</li>
                                <li className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Upcoming Events</li>
                                <li className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Contact Us</li>
                            </ul>
                            <button className='border rounded-md border-purple-900 p-1 px-2 text-purple-900 hover:bg-purple-900 hover:text-white'>Register</button>
                        </div>
                    </nav>
                    <div id="subNav" className={`${navOpen ? "block" : "hidden"} md:hidden w-[100%] h-[70vh] text-right absolute top-18 right-0 bg-white/85 z-50 flex justify-center items-start`}>
                        <ul className='w-[100%] flex justify-center items-center mr-2 flex-col'>
                            <li className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Home</li>
                            <li className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>About Us</li>
                            <li className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Race Categories</li>
                            <li className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Upcoming Events</li>
                            <li className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Contact Us</li>
                            <li className='flex justify-center items-center text-lg hover:animate-bounce my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'><FaFacebookF /> <span className='font-semibold text-sm'>Facebook</span></li>
                            <li className='flex justify-center items-center text-lg hover:animate-bounce my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'><FaTwitter /> <span className='font-semibold text-sm'>Twitter</span></li>
                            <li className='flex justify-center items-center text-lg hover:animate-bounce my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'><AiFillInstagram /> <span className='font-semibold text-sm'>Instagram</span></li>
                        </ul>
                    </div>
                    <div className='w-[100%] h-[80%] flex justify-center items-center'>
                        <Image src="/image(about).png" alt="" width={2000} height={2000} className='md:w-[60%] w-[90%] h-[60%] md:h-[80%]' />
                    </div>
                </main>
                <div id="vision" className='w-[100%] md:h-[90vh] text-zinc-800 flex justify-evenly items-center flex-col'>
                    <div className='md:w-[70%] w-[90%] flex justify-start items-center flex-col'>
                        <h1 className='md:text-4xl text-2xl mt-10 font-bold text-center'>K3's Vision</h1>
                        <p className='m-5 text-sm'>
                            At K3, Our vision is to inspiring and empowering young individuals to excel in marathons and body shows. Our mission is to provide a platform where contestants can showcase their strength, talent, and determination across various sports disciplines. We strive to create opportunities for youth to reach their full potential, encouraging them to achieve personal and athletic excellence. Through our programs, we aim to foster a community of passionate and driven athletes who are ready to blaze a trail of success and inspire others along the way.
                        </p>
                    </div>
                    <div className='md:w-[80%] w-[90%]'>
                        <h1 className='md:text-4xl text-2xl m-10 font-bold text-center'>K3's Mission</h1>
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
                    <h1 className='md:text-4xl text-zinc-800 text-2xl mt-10 font-bold text-center'>K3's Vision</h1>
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
                            <p className='w-[100%] my-6'>celebrate women's health and wellness, encouraging a holistic approach to fitness.</p>
                            <button className='border rounded-md border-purple-900 p-2 px-4 bg-purple-800 text-white hover:text-purple-900 hover:bg-red-200 font-bold hover:w-[40%] w-[90%]'>REGISTER</button>
                        </span>
                    </div>
                </div>
                <div className='h-[20%] w-[100%] bg-white shadow-inner shadow-fuchsia-900 p-4'>
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
                    <h2 className='font-semibold text-lg text-zinc-800 text-center mt-4'>Venture by Deshmukh & Gholap</h2>
                </div>
            </div>
        </>
    )
}

export default page
