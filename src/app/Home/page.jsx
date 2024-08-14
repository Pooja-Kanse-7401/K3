"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';

import Navbar from "@/components/Navbar/page.jsx"
import Footer from "@/components/Footer/page.jsx"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Page = () => {
  const imageStyle = {
    filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, .8))'
    /* Other styling for your image */
  };

  const [data, setdata] = useState()

  const toggleData = () => {
    setdata(!data)
  }

  return (
    <>
      <div className='bg-white'>
        <div id='main' className='md:h-[130vh] h-[60vh] w-[100%] bg-red-200' style={{ clipPath: "polygon(100% 0%, 100% 95%, 50% 100%, 0% 95% , 0 0)" }}>

          <Navbar/>

          <div className='w-[100%] md:my-16 flex justify-center items-center relative'>
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
        </div>


        <div className=' w-[100%] text-zinc-800 flex justify-evenly items-center flex-col'>
          <h1 className='md:text-4xl text-2xl mt-2 font-bold text-center'>Reasons to run with us!</h1>
          <div className='flex justify-center items-center flex-wrap my-10 w-[100%]'>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
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
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img2.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Quick registration</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Join the marathon </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>effortlessly with our</p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>streamlined quick </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>registration process.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img3.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>throughout your marathon</p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img4.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>throughout your marathon</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img5.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Water for participants</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Stay hydrated and energized </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>throughout your marathon</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>journey with our dedicated water </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>bottle support stations.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
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

          <div className={`${data ? "block" : "hidden"} flex justify-center items-center flex-wrap my-10 w-[100%]`}>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img7.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Finishing badge</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Prepare for race day with </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>confidence through our </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>medical counseling services.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img8.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Zumba Warmup</h2>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>Prepare for race day with </p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>confidence through our</p>
              <p className='capitalize text-sm md:my-1 text-zinc-600'>medical counseling services.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img9.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Career consultation</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Prepare for race day with </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>confidence through our</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>medical counseling services.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img10.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>Luck Draw hamper</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>All registered participants have </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>a chance to win exclusive gifts</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>through our lucky draw.</p>
            </div>
            <div className='w-[90%] md:w-[30%] text-center m-1 md:m-2'>
              <span className='flex justify-center items-end'>
                <Image src="/img11.png" alt="" height={1000} width={1000} className='md:w-[9vh] w-[6vh]' />
              </span>
              <h2 className='md:text-2xl text-lg font-semibold my-2 md:my-5'>BIB Number</h2>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>Prepare for race day with </p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>confidence through our</p>
              <p className='capitalize md:my-1 text-sm text-zinc-600'>medical counseling services.</p>
            </div>
          </div>

          <span className='text-center mb-4 w-[80%]'>
            <button onClick={toggleData} className='text-purple-900 text-lg md:text-xl font-semibold hover:animate-bounce my-2 hover:border-b-2 border-purple-900'>
              {data ? "See less" : "See more"}
            </button>
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
          <div className='w-[100%] md:h-[62%] h-[70%] flex justify-center items-center relative md:flex-row flex-col'>
            <div className='md:w-[50%] w-[90%] flex justify-center items-center '>
              <Image src="/registerImg.png" alt="" width={1000} height={1000} className='md:w-[75vh] w-[90%] md:h-auto h-[90%] md:mt-10 mt-20 absolute top-0' style={imageStyle} />
            </div>
            <div className='relative w-[90%] md:w-[35%] md:h-[100%] h-[120%] z-20 md:mt-40 mt-5 rounded-xl flex justify-center items-center'>
              <div className='h-[100%]'>
                <Image src="/Overlay.png" alt="" width={1000} height={1000} className='md:h-[100%] h-[110%] w-[100%]' />
              </div>
              <div className='flex justify-start items-center flex-col absolute top-0 left-0'>
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


        <div className='md:h-[110vh] h-auto w-[100%] bg-red-200'>
          <div className='md:h-[25vh] h-[20vh] w-[100%] bg-purple-900 flex justify-center items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75% , 0 0)" }}>
            <h1 className='md:text-4xl text-2xl font-bold'>How To Apply</h1>
          </div>
          <div className='md:h-[60%] h-[100vh] w-[100%] my-2 py-5 relative flex justify-evenly items-center text-zinc-800 md:flex-row flex-col'>
            <div className='flex justify-between items-center flex-col md:h-[70%] h-[45%] z-20 md:w-[30%] w-[85%]'>
              <span className='h-auto m-2 relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-l-4 border-l-8 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[7vh] md:h-[7vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>1</span>
                <div className='flex justify-center items-center flex-col gap-2 pt-5'>
                  <span className='flex justify-center items-center gap-2 pl-7'>
                    <h1 className='md:text-xl text-md font-bold text-zinc-900'>Visit our Registration Page: </h1>
                    <Image src="/apply1.png" alt="" height={300} width={300} className='md:w-[50px] w-[40px]' />
                  </span>
                  <p className='w-[80%] text-center md:text-md text-sm'>Go to the Registration Page registration page link on our website and fill the form.</p>
                </div>
              </span>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-l-4 border-l-8 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[7vh] md:h-[7vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>2</span>
                <div className='flex justify-center items-center flex-col gap-2 pt-5'>
                  <span className='flex justify-center items-center gap-2 pl-7'>
                    <h1 className='md:text-xl text-md font-bold text-zinc-900'>Select Your Race Category </h1>
                    <Image src="/apply3.png" alt="" height={300} width={300} className='md:w-[50px] w-[40px]' />
                  </span>
                  <p className='w-[80%] text-center md:text-md text-sm'>Choose the race category you wish to participate in</p>
                </div>
              </span>
            </div>
            <Image src="/footerImg.png" alt="" height={300} width={300} className='rounded-3xl md:w-[25%] w-[90%] h-[100%] md:h-auto md:relative absolute top-0 z-10' />
            <div className='flex justify-between items-center flex-col md:h-[70%] h-[45%] z-20 md:w-[30%] w-[85%]'>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-r-4 border-l-8 md:border-l-0 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[7vh] md:h-[7vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>3</span>
                <div className='flex justify-center items-center flex-col gap-3 pt-5'>
                  <span className='flex justify-center items-center gap-2 pl-7'>
                    <h1 className='md:text-xl text-md font-bold text-zinc-900'>Make Payment </h1>
                    <Image src="/apply2.png" alt="" height={300} width={300} className='md:w-[50px] w-[40px] h-[40px]' />
                  </span>
                  <p className='w-[80%] text-center md:text-md text-sm'>Review registration fee, Select your payment method.</p>
                </div>
              </span>
              <span className='h-[45%] relative w-[98%] md:bg-red-100 bg-white/90 rounded-2xl md:border-r-4 border-l-8 md:border-l-0 border-purple-900'>
                <span className='absolute top-[34%] left-[-24px] p-2 bg-purple-900 w-[6vh] h-[6vh] md:w-[7vh] md:h-[7vh] text-white md:text-2xl text-lg font-bold rounded-full flex justify-center items-center'>4</span>
                <div className='flex justify-center items-center flex-col gap-3 pt-5'>
                  <span className='flex justify-center items-center gap-2 pl-7'>
                    <h1 className='md:text-xl text-md font-bold text-zinc-900'>Get your BIB No.  </h1>
                    <Image src="/apply4.png" alt="" height={300} width={300} className='md:w-[50px] w-[40px] h-[40px]' />
                  </span>
                  <p className='w-[80%] text-center md:text-md text-sm'>Get you BIB No. & Participate in Race.</p>
                </div>
              </span>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Page
