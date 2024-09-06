import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='relative md:pb-12 h-[20vh] md:h-[30vh] w-[100%] bg-purple-900 flex justify-start pt-5 items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75% , 0 0)" }}>
                    <h1 className='md:text-4xl text-xl font-bold'>Run with Purpose, Finish With Pride</h1>
                </div>
                <span className='text-indigo-950 absolute md:top-36 top-24  w-[100%] flex justify-center items-center gap-8 '>
                    <Link href="/Signup" className='bg-white md:p-6 p-2 px-4 md:px-10 md:text-2xl font-semibold rounded-xl hover:text-purple-900'>Signup</Link>
                    <Link href="/Login" className='bg-white md:p-6 p-2 px-4 md:px-10 md:text-2xl font-semibold rounded-xl hover:text-purple-900'>Login</Link>
                    <Link href="/Home" className='bg-white md:p-6 p-2 px-4 md:px-10 md:text-2xl font-semibold rounded-xl hover:text-purple-900'>Home</Link>
                </span>
                <div className='h-auto flex justify-start items-center flex-col'>
                    <ul className='flex justify-center items-center gap-2 mt-10'>
                        <li className='md:text-xl text-base font-semibold text-center text-purple-900'>
                            <p>Powered By Unity</p>
                            <p>Driven By Trust</p>
                        </li>
                        <li><Image src="/logo.png" alt="" width={200} height={200} className='md:w-[15vh] w-[8vh] m-4' /></li>
                        <p className='md:text-xl text-base font-semibold text-center text-zinc-900'>Athleisure</p>
                    </ul>
                    <div className='md:w-[40%] w-[100%] flex justify-center items-center flex-col'>
                        <h1 className='md:text-4xl text-2xl mt-2 font-bold text-center text-zinc-900 mb-10'>Sign up</h1>
                        <form action="" className='w-[90%]'>
                            <input type="text" name="" id="" placeholder='Name' className='my-2 w-[100%] rounded-xl p-3  px-5 outline-none text-zinc-950 border border-stone-500' />
                            <input type="number" name="" id="" placeholder='Mobile' className='my-2 w-[100%] rounded-xl p-3  px-5 outline-none text-zinc-950 border border-stone-500' />
                            <input type="email" name="" id="" placeholder='Email address' className='my-2 w-[100%] rounded-xl p-3  px-5 outline-none text-zinc-950 border border-stone-500' />
                            <input type="password" name="" id="" placeholder='Password' className='my-2 w-[100%] rounded-xl p-3  px-5 outline-none text-zinc-950 border border-stone-500' />
                            <button className='border rounded-xl border-purple-900 p-3 px-2 text-white bg-purple-900 hover:bg-red-100 hover:text-purple-900 w-[100%] mt-4 font-bold'>SIGNUP</button>
                            <p className='text-zinc-900 text-lg font-semibold my-4 text-center'>Already have an account? <Link href="/Login" className='text-purple-900 font-bold'> Login!</Link></p>
                            <span className='flex justify-center items-center gap-4'>
                                <hr className='w-[45%] h-[2px] bg-stone-400'/>
                                <p className='text-4xl text-zinc-900'>OR</p>
                                <hr className='w-[45%] h-[2px] bg-stone-400'/>
                            </span>
                            <button className='border rounded-xl border-purple-900 text-indigo-950 text-xl w-[100%] my-4 font-bold flex justify-center items-center mb-28'>Signup with <Image src="/google.png" alt="" width={200} height={200} className='w-12'/></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
