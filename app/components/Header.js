import React from 'react'
import Link from 'next/link'

export default function Header() {



  return (
    <nav className="flex justify-between items-center md:px-16 px-3 p-5 bg-pink-100 sticky top-0 z-10">
      <div className="flex  gap-4">
        <h1 className="lg:text-4xl sm:text-3xl font-sans font-bold bg-gradient-to-l from-blue-600 to-yellow-400 bg-clip-text text-transparent">ShreeMad Bhagvatam</h1>
        <img className="h-12 w-12 rounded-full md:block hidden" src="/krishna.jpg" alt=""></img>
        </div>
        <div className="lg:flex hidden gap-9 justify-center items-center">
        <Link href={'/'}>
        <h4 className="text-xs font-sans font-black ">Home</h4>
        </Link>
          <Link href={'/chapters'}>
            <h4 className="text-xs font-sans font-black ">Chapters</h4>
            </Link>
            <Link href={'/quotes'}>
            <h4 className="text-xs font-sans font-black">Quotes</h4>
            </Link>
            <Link href={'/aboutgeeta'}>
            <h4 className="text-xs font-sans font-black">About Geeta</h4>
            </Link>
        </div>
       
        <div className="lg:hidden">
         <button 
          className="menu-btn">
        <svg className="h-8 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </button>
        
        </div>
    </nav>
  )
}
