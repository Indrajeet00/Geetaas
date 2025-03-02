import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="bg-orange-100 pt-10 ">
      <div className="flex flex-row justify-center">
      <img className="h-12 w-14" src="https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-krishna-s-flute-with-peacock-feather-png-image_12615669.png" alt=""></img>
      <p className="text-4xl sm:text-3xl text-center font-black bg-gradient-to-l from-blue-700 to-orange-600 bg-clip-text text-transparent font-serif">CHAPTERS</p>
      <img className="h-12 w-14" src="https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-krishna-s-flute-with-peacock-feather-png-image_12615669.png" alt=""></img>
      </div>
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-9 flex flex-col gap-5 p-10 justify-items-center ">
      
      <div className="w-full p-4 bg-pink-200 rounded-md shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
        <p className="text-sm font-bold text-gray-500">Chapter1</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Sainya-Darsana</h1>
        <h4 className="text-md mt-2 text-red-700">Arjuna looks over the battlefield of Kuruksetra and becomes disturbed at the idea of killing
           family and seniors. He gives his arguments to Krishna why he should abandon the battlefield.</h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
           <Link href={'/chapters/chapter1'}>
            <p className="text-sm">47 Verses</p>
            </Link>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
        <p className="text-sm font-bold text-gray-500">Chapter2</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Sankhya Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Arjuna surrenders to  to Lord Krishna and accepting Him as his Guru, Explanation of the
           main cause of all suffering, which is ignorance of the true nature of the Self.</h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
           <Link href={'/chapters/chapter2'}>
            <p className="text-sm">72 Verses</p>
            </Link>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter3</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Karma Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Lord Krishna emphasizes the importance of karma in life. He reveals that 
          it is important for every human being to engage in some sort of activity in this material world.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">43 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter4</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Jnana Karma Sanyasa Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna glorifies the Karma Yoga and imparts the Transcendental Knowledge 
          to Arjuna. He reveals the reason behind his 
          appearance in this material world.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">42 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter5</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Karma Sanyasa Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna compares the paths of renunciation in actions (Karma Sanyas) 
          and actions with detachment (Karma Yoga) and explains that both are means to reach the same
          goal and we can choose either.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">29 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter6</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Dhyana Yoga</h1>
        <h4 className="text-md mt-2 text-red-700"> Krishna reveals the "Yoga of Meditation" and how to practise this Yoga. 
           He reveals how one can focus their mind on Paramatma and unite with the God.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">47 Verses</p>
           </div>
       </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter7</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Gyaan Vigyana Yoga</h1>
        <h4 className="text-md mt-2 text-red-700"> Krishn reveals
           his illusionary energy in this material world called Maya, which is very difficult to overcome 
           but those who surrender their minds unto Him attain Him easily. 
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">30 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter8</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Akshara Brahma Yoga</h1>
        <h4 className="text-md mt-2 text-red-700"> If we can remember Krishna at the time of death, we will certainly
           attain him. Thus, thinking of Him and chanting His names at all times. one can go beyond this material existence to Lord's Supreme abode.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">28 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter9</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Raja Vidya Yoga</h1>
        <h4 className="text-md mt-2 text-red-700"> krishn is Supreme and how this material existence is created, maintained and
           destroyed by His Yogmaya and all beings come and go under his supervision.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">34 Verses</p>
           </div> 
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter10</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Vibhooti Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna reveals Himself as the cause of all causes. He describes His
           various manifestations and opulences in order to increase Arjuna's Bhakti. 
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">42 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter11</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Vishwaroopa Darshana Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Arjuna, after contemplating everything shree Krishn has told him so far, Arjuna requests Krishna to reveal His Universal Cosmic Form that 
          encompasses all the universes, the entire existence . 
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">55 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter12</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Bhakti Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna emphasizes the superiority of Bhakti Yoga (the path of devotion) 
          over all other types of spiritual disciplines and reveals various aspects of devotion. 
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">20 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter13</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Prakrti-Purusa Viveka Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna discriminates between the physical body and the immortal soul.
           He explains that the physical body is temporary and perishable whereas the soul is permanent and eternal.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">35 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter14</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Guna-Traya Vibhaga Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna reveals the three gunas (modes) of the material nature - goodness,
          passion and ignorance which everything in the material existence is influenced by.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">27 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter15</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Purushottama Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">"Purushottama Yoga". In Sanskrit, Purusha means the "All-pervading God",
           and Purushottam means the timeless & transcendental aspect of God. 
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">20 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter16</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Daivasura Sampad Vibhaga Yoga</h1>
        <h4 className="text-md mt-2 text-red-700"> Krishna describes two kinds of natures among human beings - divine and 
          demoniac Those who possess demonaic qualities do not follow the regulations of the scriptures and embrace materialistic
           views.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">24 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter17</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Sraddhatraya Vibhaga Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Krishna describes the three types of faith corresponding to the three modes
           of the material nature. Lord Krishn reveals nature of faith that determines
           the quality of life and the character of living entities.
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">28 Verses</p>
           </div>
      </div>

      <div className="w-full p-4 bg-pink-200 rounded-md drop-shadow-xl hover:skew-y-0 skew-y-1 transform hover:scale-105 transition duration-300 ease-in-out opacity-75 hover:opacity-100">
       <p className="text-sm font-bold text-gray-500">Chapter18</p>
        <h1 className="text-xl font-black bg-gradient-to-l from-blue-800 to-orange-400 bg-clip-text text-transparent">Moksha Yoga</h1>
        <h4 className="text-md mt-2 text-red-700">Arjuna requests the Lord to explain the difference between the two types 
          of renunciations - sanyaas(renunciation of actions) and tyaag(renunciation of desires).
          </h4>
           <div className="flex gap-2 pt-5">
           <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
            <p className="text-sm">78 Verses</p>
           </div>
      </div>

    </div>
    </div>
  )
}
