import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './themetoggle'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className='font-bold text-3xl'>Snippit</h1>
            <div className="flex space-x-4 justify-center items-center">

                <Link href="/">Home</Link>
                <Link href="/snippets">Snippets</Link>
                <Link href="/about">About</Link>
                <ModeToggle/>
            </div>
    </nav>
  )
}

export default NavBar