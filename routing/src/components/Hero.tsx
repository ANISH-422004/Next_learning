import React from 'react'
import teamImg from 'public/team.jpg'
import Image from 'next/image'
const Hero = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 bg-black opacity-[20%] -z-10'>

                <Image src={teamImg} alt="My Image" fill /><div></div>
            </div>
            <div>
                <h1 className='text-6xl text-white font-bold text-center pt-20'>Welcome to Our Team</h1>
                <p className='text-xl text-white text-center mt-4'>We are a group of dedicated professionals.</p>
                <div className='flex justify-center mt-8'>
                </div>
            </div>
        </div>
    )
}

export default Hero