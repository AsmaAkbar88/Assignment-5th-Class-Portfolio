'use client'

import React from 'react'
import Image from 'next/image'


const page = () => {

  const handleClick = () => {
    alert('Details Submit Successfully 😊')
  }
  return (


    <div className=' p-8 text-center '>
      <div className='text-7xl m-6 '><h1>Contact me</h1>
      </div>

      {/* **********Details******** */}


      <div className='max-w-md mx-auto text-xl '>
        <p className=''>If you would like to get in touch with me, blow is my
          <b className='text-blue-500'> LinkedIn profile </b>& <b className='text-black'> GitHub Profile</b></p></div>

      {/* Github */}

      <div className='grid grid-cols-2 gap-8 mb-6 max-w-4xl mx-auto p-8'>
        <div className='flex items-center'>
          <Image src="/github.webp" alt="GitHub" width={64} height={64} className="mr-4" />
          <a
            href="https://github.com/dashboard"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/dashboar
          </a>

        </div>

        {/* Linkedin  */}
        <div className='flex items-center'>
          <Image src="/linkedin.jpeg" alt="Linkedin" width={64} height={64} className="mr-4" />
          <a
            href="https://www.linkedin.com/in/asma-akbar-6397a3224/"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/asma-akbar
          </a>

        </div>

      </div>

      <div><p className='text-lg font-extralight mb-2 text-black-400 animate-pulse'> Please feel free to check it out!

        Additionally, if you find my website appealing, I would greatly appreciate your feedback on it. </p>

        {/* ***********box********* */}
        <div className="flex justify-center text-black p-4">
          <div className="bg-red-400 p-8 rounded-lg w-full max-w-lg ">
            <form className="flex flex-col  gap-5">
              <div className="flex items-center">
                <label className="text-md  text-black mr-4 w-28  ">Name:</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="focus:ring focus:ring-blue-500 p-2 w-full rounded-md"
                />
              </div>

              <div className="flex items-center">
                <label className="text-md  text-black mr-4 w-28">Contact Number:</label>
                <input
                  type="tel"
                  placeholder="Your Contact Number"
                  className="focus:ring focus:ring-blue-500 p-2 w-full rounded-md"
                />
              </div>

              <div className="flex items-center">
                <label className="text-md font-medium text-black mr-4 w-28">Message:</label>
                <textarea
                  placeholder="Your Message"
                  className="focus:ring focus:ring-blue-500 p-2 w-full rounded-md resize-none"
                ></textarea>
              </div>

              <button onClick={handleClick}
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 
        rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>

            <p className="font-semibold mt-4">Thank you!</p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default page
