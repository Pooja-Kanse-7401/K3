"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaXmark, FaBars } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link';

const Page = () => {
    const [navOpen, setNavOpen] = useState()


    const toggleNav = () => {
        setNavOpen(!navOpen)
    }


    return (
        <>
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
                        <Link href="/Home" className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Home</Link>
                        <Link href="/About" className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>About Us</Link>
                        <Link href="/RaceCategories" className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Race Categories</Link>
                        <Link href="" className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Upcoming Events</Link>
                        <Link href="" className='font-semibold text-sm hover:animate-bounce hover:text-purple-900 hover:border-t-2 hover:border-purple-900 p-1 pb-2 mt-2'>Contact Us</Link>
                    </ul>
                    <button className='border rounded-md border-purple-900 p-1 px-2 text-purple-900 hover:bg-purple-900 hover:text-white'>Register</button>
                </div>
            </nav>
            <div id="subNav" className={`${navOpen ? "block" : "hidden"} md:hidden w-[100%] h-[70vh] text-right absolute top-18 right-0 bg-white/85 z-20 flex justify-center items-start`}>
                <ul className='w-[100%] flex justify-center items-center mr-2 flex-col'>
                    <Link href="/Home" className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Home</Link>
                    <Link href="/About" className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>About Us</Link>
                    <Link href="/RaceCategories" className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Race Categories</Link>
                    <Link href="/Events" className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Upcoming Events</Link>
                    <Link href="" className='font-semibold hover:animate-bounce text-sm my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'>Contact Us</Link>
                    <li className='flex justify-center items-center text-lg hover:animate-bounce my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'><FaFacebookF /> <span className='font-semibold text-sm'>Facebook</span></li>
                    <li className='flex justify-center items-center text-lg hover:animate-bounce my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'><FaTwitter /> <span className='font-semibold text-sm'>Twitter</span></li>
                    <li className='flex justify-center items-center text-lg hover:animate-bounce my-1 text-purple-900 hover:border-b-2 border-purple-900 p-1'><AiFillInstagram /> <span className='font-semibold text-sm'>Instagram</span></li>
                </ul>
            </div>
        </>
    )
}

export default Page
