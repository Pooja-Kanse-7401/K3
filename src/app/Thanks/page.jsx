import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='md:pb-12 pb-8 h-[25vh] w-[100%] bg-purple-900 flex justify-center md:pt-5 items-center flex-col' style={{ clipPath: "polygon(100% 0%, 100% 75%, 50% 100%, 0% 75% , 0 0)" }}>
                    <h1 className='md:text-4xl text-xl font-bold'>Run with Purpose, Finish With Pride</h1>
                </div>
                <div className='h-auto py-10 md:py-40 flex justify-center items-center bg-blend-screen flex-col'>
                    <Image src="/Thanks.png" alt="" height={3000} width={3000} className='md:w-[25%] w-[70%] ' />
                    <h1 className='md:text-4xl text-2xl font-bold text-zinc-900'>Your booking is confirmed</h1>
                    <span className='flex justify-center items-center flex-wrap gap-4 w-[90%] md:w-[70%] text-zinc-700 mt-10'>
                        <p className='md:text-2xl text-base mx-4'>Race Category - <span className='font-bold'>5 Kms</span> </p>
                        <p className='md:text-2xl text-base mx-4'>Cash Prize - <span className='font-bold'>Yes</span> </p>
                        <p className='md:text-2xl text-base mx-4'>Registration Fees - <span className='font-bold'>300/- Per Person</span> </p>
                        <p className='md:text-2xl text-base mx-4'>No. Of Persons-<span className='font-bold'>3</span> </p>
                        <p className='md:text-2xl text-base mx-4'>Location - <span className='font-bold'>Lorem ipsum</span> </p>
                        <p className='md:text-2xl text-base mx-4'>Date & Time - <span className='font-bold'>Lorem ipsum</span> </p>
                    </span>
                    <button className='border rounded-xl border-purple-900 p-3 px-2 text-white bg-purple-900 hover:bg-red-100 hover:text-purple-900 w-[90%] md:w-[20%] mt-8 font-bold'>CHECK FOR OTHER EVENTS</button>
                    <Link href="/Home" className='text-center border rounded-xl border-purple-900 p-3 px-2 text-white bg-purple-900 hover:bg-red-100 hover:text-purple-900 w-[90%] md:w-[20%] mt-4 font-bold'>BACK TO HOME</Link>
                </div>
            </div>
        </>
    )
}

export default Page
