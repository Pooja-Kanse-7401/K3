"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaXmark, FaBars } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { CiCalendar, CiLocationOn } from "react-icons/ci";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Page = () => {
  const imageStyle = {
    filter: 'drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.10))',
    /* Other styling for your image */
  };

  const [navOpen, setNavOpen] = useState()

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <>
      <div className='bg-white'>
        <main className='md:h-[130vh] h-[60vh] w-[100%] bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 95%, 50% 100%, 0% 95% , 0 0)" }}>
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
            <div id="sideNav" className='md:flex hidden justify-around items-center w-[100%] mt-5'>
              <ul className='flex justify-center items-center flex-wrap gap-1 md:gap-5 '>
                <li className='font-semibold text-sm hover:text-purple-900 hover:border-t-2 hover:border-purple-900'>Home</li>
                <li className='font-semibold text-sm hover:text-purple-900 hover:border-t-2 hover:border-purple-900'>About Us</li>
                <li className='font-semibold text-sm hover:text-purple-900 hover:border-t-2 hover:border-purple-900'>Race Categories</li>
                <li className='font-semibold text-sm hover:text-purple-900 hover:border-t-2 hover:border-purple-900'>Upcoming Events</li>
                <li className='font-semibold text-sm hover:text-purple-900 hover:border-t-2 hover:border-purple-900'>Contact Us</li>
              </ul>
              <button className='border rounded-md border-purple-900 p-1 px-2 text-purple-900 hover:bg-purple-900 hover:text-white'>Register</button>
            </div>
          </nav>

          <div id="subNav" className={`${navOpen ? "block" : "hidden"} w-[50%] h-[50vh] text-right absolute top-18 right-0 bg-white/75 z-20 flex justify-center items-center`}>
            <ul className='w-[100%] flex justify-center items-end mr-2 flex-col'>
              <li className='font-semibold text-sm my-2 text-purple-900 hover:border-b-2 border-purple-900'>Home</li>
              <li className='font-semibold text-sm my-2 text-purple-900 hover:border-b-2 border-purple-900'>About Us</li>
              <li className='font-semibold text-sm my-2 text-purple-900 hover:border-b-2 border-purple-900'>Race Categories</li>
              <li className='font-semibold text-sm my-2 text-purple-900 hover:border-b-2 border-purple-900'>Upcoming Events</li>
              <li className='font-semibold text-sm my-2 text-purple-900 hover:border-b-2 border-purple-900'>Contact Us</li>
              <li className='flex justify-center items-center text-lg my-2 text-purple-900 hover:border-b-2 border-purple-900'><FaFacebookF /> <span className='font-semibold text-sm'>Facebook</span></li>
              <li className='flex justify-center items-center text-lg my-2 text-purple-900 hover:border-b-2 border-purple-900'><FaTwitter /> <span className='font-semibold text-sm'>Twitter</span></li>
              <li className='flex justify-center items-center text-lg my-2 text-purple-900 hover:border-b-2 border-purple-900'><AiFillInstagram /> <span className='font-semibold text-sm'>Instagram</span></li>
            </ul>
          </div>

          <div className='w-[100%] my-5 flex justify-center items-center relative'>
            <div className='flex justify-center items-center w-[90%] md:h-[90vh] h-[50vh]'>
              <Swiper
                spaceBetween={38}
                centeredSlides={true}
                dir="rtl"
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-[100%] h-[100%]]"
              >
                <SwiperSlide>
                  <Image src="/homeImg1.png" alt="" width={1000} height={1000} className='w-[100%] h-[100%]' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/homeImg2.png" alt="" width={1000} height={1000} className='w-[100%] h-[100%]' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/homeImg3.png" alt="" width={1000} height={1000} className='w-[100%] h-[100%]' />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </main>


        <div className=' md:h-[130vh] w-[100%] text-zinc-800 flex justify-evenly items-center flex-col'>
          <h1 className='md:text-4xl text-2xl mt-2 font-bold text-center'>Reasons to run with us!</h1>
          <div className='flex justify-center items-center flex-wrap my-10 w-[100%]'>
            <div className='w-[45%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img1.png" alt="" height={300} width={300} className='w-[3vh] md:w-[4vh] h-[6vh] md:h-[8vh]' />
                <Image src="/img1.png" alt="" height={1000} width={1000} className='md:w-[5vh] w-[4vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>throughout your marathon</p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[45%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img2.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Quick registration</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Join the marathon </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>effortlessly with our</p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>streamlined quick </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>registration process.</p>
            </div>
            <div className='w-[45%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img3.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>throughout your marathon</p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[45%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img4.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>throughout your marathon</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[45%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img5.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>throughout your marathon</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[45%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img6.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>throughout your marathon</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>bottle support stations.</p>
            </div>
          </div>
          <span className='text-right w-[80%]'>
            <button className='text-purple-900 text-lg md:text-xl font-semibold hover:underline'>See more</button>
          </span>
        </div>


        <div className='h-[170vh] w-[100%] bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 95%, 50% 100%, 0% 95% , 0 0)" }}>
          <div className='md:h-[30vh] h-[25vh] w-[100%] bg-purple-900 flex justify-start pt-5 items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75% , 0 0)" }}>
            <h1 className='md:text-4xl text-xl font-bold'>Run with Purpose, Finish With Pride</h1>
            <span className='flex justify-between items-center gap-2 w-[80%] md:w-[60%] mt-[4%]'>
              <p className='md:text-2xl text-md font-semibold'>Upcoming Event: </p>
              <ul className='flex justify-between items-center w-[35%] mr-[20%] md:mr-[40%]'>
                <li className='md:text-4xl text-2xl font-bold'><CiCalendar /></li>
                <li className='md:text-4xl text-2xl font-bold'><CiLocationOn /></li>
              </ul>
            </span>
          </div>
          <div className='w-[100%] h-[62%] flex justify-center items-center relative md:flex-row flex-col'>
            <div className='md:w-[50%] w-[90%] flex justify-center items-center '>
              <Image src="/registerImg.png" alt="" width={1000} height={1000} className='md:w-[37%] w-[90%] md:h-auto h-[90%] md:mt-10 mt-20 absolute top-0' style={imageStyle} />
            </div>
            <div className='w-[90%] md:w-[35%] md:h-[100%] h-[120%] z-20 mt-40 bg-white/35 md:bg-gradient-to-br from-blue-300  via-orange-200  to-red-300 rounded-xl flex justify-center items-center'>
              {/* <div className='h-[100%]'>
                <Image src="/rainbow.png" alt="" width={1000} height={1000} className='h-[100%] w-[100%]'/>
              </div> */}
              <div className='flex justify-start items-center flex-col'>
                <h1 className='md:text-4xl text-2xl mt-2 font-bold text-zinc-800'>Registeration form</h1>
                <div className='flex justify-center items-center flex-col py-4 w-[80%]'>
                  <input type="text" name="" id="" placeholder='Name' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none mt-10 text-zinc-950' />
                  <input type="number" name="" id="" placeholder='Phone' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-950' />
                  <input type="email" name="" id="" placeholder='E-mail' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                  <input type="number" name="" id="" placeholder='Age' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                  <input type="text" name="" id="" placeholder='Gender' className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800' />
                  <textarea name="" id="" rows={5} className='md:m-2 m-4 w-[100%] rounded-md p-3  px-5 outline-none text-zinc-800 '></textarea>
                  <span className='flex justify-center items-center w-[95%]'>
                    <input type="checkbox" name="" id="" className='p-6' />
                    <p className='md:text-zinc-700 text-zinc-900 text-sm m-2'>By using this form you agree with the storage and
                      handling of your data by this website.</p>
                  </span>
                  <button className='border rounded-md border-purple-900 p-1 px-2 text-white bg-purple-900 hover:bg-transparent hover:text-purple-900 w-[100%] mt-2'>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='h-[200vh] md:h-[120vh] w-[100%] bg-white flex justify-center items-center flex-col'>
          <h1 className='md:text-4xl text-2xl font-bold text-zinc-700 text-center m-3'>Race Categories</h1>
          <div className='flex justify-center items-center flex-wrap w-[100%] h-[90%] text-zinc-700'>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-pink-200'>
              <Image src="/Family.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>Family Run</h2>
              <p className='text-sm'>Registration Fees - 450/-</p>
              <p className='text-sm'>Cach Prize - No</p>
              <button className='border-2 w-[100%] rounded-md border-purple-500 hover:font-semibold hover:bg-transparent hover:text-purple-900 p-1 px-2 bg-purple-500 text-white'>REGISTER</button>
            </div>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-blue-200'>
              <Image src="/disabled.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>Specialy abled</h2>
              <p className='text-sm'>Registration fees - 300/-</p>
              <p className='text-sm'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-blue-500 hover:font-semibold hover:bg-transparent hover:text-blue-900 p-1 px-2 bg-blue-500 text-white'>REGISTER</button>
            </div>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-fuchsia-900'>
              <Image src="/Jogging.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>5 Kms</h2>
              <p className='text-sm'>Registration Fees - 750/-</p>
              <p className='text-sm'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-fuchsia-900 hover:font-semibold hover:bg-transparent hover:text-fuchsia-900 p-1 px-2 bg-fuchsia-900 text-white'>REGISTER</button>
            </div>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-red-500'>
              <Image src="/Athlete.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>10 Kms</h2>
              <p className='text-sm'>Registration Fees - 1250/-</p>
              <p className='text-sm'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-red-500 hover:font-semibold hover:bg-transparent hover:text-red-500 p-1 px-2 bg-red-500 text-white'>REGISTER</button>
            </div>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-red-600'>
              <Image src="/running (2).png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>15 Kms</h2>
              <p className='text-sm'>Registration Fees - 1600/-</p>
              <p className='text-sm'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-red-600 hover:font-semibold hover:bg-transparent hover:text-red-600 p-1 px-2 bg-red-600 text-white'>REGISTER</button>
            </div>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-purple-900'>
              <Image src="/running.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>21 Kms</h2>
              <p className='text-sm'>Registration Fees - 1800/-</p>
              <p className='text-sm'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-purple-900 hover:font-semibold hover:bg-transparent hover:text-purple-900 p-1 px-2 bg-purple-900 text-white'>REGISTER</button>
            </div>
            <div className='w-[44%] md:w-[20%] m-1 md:m-4 p-2 px-4 gap-4 flex justify-center items-center flex-col border-8 rounded-xl border-teal-600'>
              <Image src="/vector.png" alt="" width={100} height={100} className='w-[25%] m-2' />
              <h2 className='text-2xl font-bold'>42 Kms</h2>
              <p className='text-sm'>Registration Fees - 2050/-</p>
              <p className='text-sm'>Cach Prize - Yes</p>
              <button className='border-2 w-[100%] rounded-md border-teal-600 hover:font-semibold hover:bg-transparent hover:text-teal-600 p-1 px-2 bg-teal-600 text-white'>REGISTER</button>
            </div>
          </div>
        </div>


        <div className='md:h-[110vh] h-[120vh] w-[100%] bg-red-200'>
          <div className='md:h-[25vh] h-[20vh] w-[100%] bg-purple-900 flex justify-center items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75% , 0 0)" }}>
            <h1 className='md:text-4xl text-2xl font-bold'>How To Apply</h1>
          </div>
          <div className='md:h-[60%] h-[80%] w-[100%] relative flex justify-evenly items-center text-zinc-800 md:flex-row flex-col'>
            <div className='flex justify-between items-center flex-col md:h-[70%] h-[45%] z-20 md:w-[30%] w-[85%]'>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-l-4 border-l-8 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[8vh] md:h-[8vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>1</span>
                <div className='flex justify-center items-center flex-col gap-2 pt-5'>
                  <span className='flex justify-center items-center gap-2'>
                    <h1 className='md:text-2xl text-md font-bold text-zinc-900'>Visit our Registration Page: </h1>
                    <Image src="/apply1.png" alt="" height={300} width={300} className='md:w-[12%] w-[10%]' />
                  </span>
                  <p className='w-[80%] text-center md:text-lg text-sm'>Go to the Registration Page registration page link on our website and fill the form.</p>
                </div>
              </span>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-l-4 border-l-8 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[8vh] md:h-[8vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>2</span>
                <div className='flex justify-center items-center flex-col gap-2 pt-5'>
                  <span className='flex justify-center items-center gap-2'>
                    <h1 className='md:text-2xl text-md font-bold text-zinc-900'>Select Your Race Category </h1>
                    <Image src="/apply3.png" alt="" height={300} width={300} className='md:w-[12%] w-[10%]' />
                  </span>
                  <p className='w-[80%] text-center md:text-lg text-sm'>Choose the race category you wish to participate in</p>
                </div>
              </span>
            </div>
            <Image src="/footerImg.png" alt="" height={300} width={300} className='rounded-3xl md:w-[25%] w-[90%] h-[100%] md:h-auto md:relative absolute top-0 z-10' />
            <div className='flex justify-between items-center flex-col md:h-[70%] h-[45%] z-20 md:w-[30%] w-[85%]'>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-r-4 border-l-8 md:border-l-0 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[8vh] md:h-[8vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>3</span>
                <div className='flex justify-center items-center flex-col gap-3 pt-5'>
                  <span className='flex justify-center items-center gap-2'>
                    <h1 className='md:text-2xl text-md font-bold text-zinc-900'>Make Payment </h1>
                    <Image src="/apply2.png" alt="" height={300} width={300} className='md:w-[20%] w-[16%]' />
                  </span>
                  <p className='w-[80%] text-center md:text-lg text-sm'>Review registration fee, Select your payment method.</p>
                </div>
              </span>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-r-4 border-l-8 md:border-l-0 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[8vh] md:h-[8vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>4</span>
                <div className='flex justify-center items-center flex-col gap-3 pt-5'>
                  <span className='flex justify-center items-center gap-2'>
                    <h1 className='md:text-2xl text-md font-bold text-zinc-900'>Get your BIB No.  </h1>
                    <Image src="/apply4.png" alt="" height={300} width={300} className='md:w-[20%] w-[16%]' />
                  </span>
                  <p className='w-[80%] text-center md:text-lg text-sm'>Get you BIB No. & Participate in Race.</p>
                </div>
              </span>
            </div>
          </div>
          {/* <hr className='shadow-md  border border-fuchsia-800'/> */}
          <div className='h-[20%] w-[100%] bg-white shadow-inner shadow-fuchsia-900'>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
