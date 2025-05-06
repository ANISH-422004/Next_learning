import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-transparent border-b-2 m-b-2 text-white p-4 fixed top-0 w-full'>
      <div className='text-2xl font-bold'>My App</div>
        <div className='flex space-x-4'>
            <Link href="/" className='hover:text-gray-400'>Home</Link>
            <Link href="/performance" className='hover:text-gray-400'>Performance</Link>
            <Link href="/reliability" className='hover:text-gray-400'>Reliability</Link>
            <Link href="/login" className='hover:text-gray-400'>Login</Link>  
            <Link href="/register" className='hover:text-gray-400'>Register</Link>

        </div>

    </div>
  )
}

export default Navbar