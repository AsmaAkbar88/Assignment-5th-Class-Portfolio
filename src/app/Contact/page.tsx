import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    

      <div className=' p-20 '>
        <div className='text-center'>
          <div className='text-5xl font-bold mt-[-2] '><h1>Contact me</h1>
          </div>

{/* **********Details******** */}

          
          <div className='max-w-md mx-auto text-xl '>
            <p className=''>If you would like to get in touch with me, blow is my <b>LinkedIn profile</b>.</p></div>

           {/* linkdin */}

           <div className='grid grid-cols-2 gap-8 mb-6 max-w-4xl mx-auto p-14'>
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
           
</div>

<div><p className='text-lg font-extralight mb-2 text-black-400 animate-pulse'> Please feel free to check it out!

Additionally, if you find my website appealing, I would greatly appreciate your feedback on it. </p>

{/* ***********box********* */}
<div className="flex justify-center  text-black p-10">
<div>
            <form>
                <div className=" flex items center mb-4">
                    <label className="block text-2xl font-medium text-gray-700 mr-4 "> Name:  </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-[-600px] h-10 p-2 border border-red-300 rounded-md  focus:ring focus:ring-blue-500 "
                        required
                    />
                </div>
                
                <div className=" flex items-center mb-4">
                    <label className="block text-2xl font-medium text-gray-700 mr-2">Contact Number:</label>
                    <input
                        type="tel"
                        placeholder="Your Contact Number"
                        className="w-[-400px] h-10 p-2 border border-red-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className=" flex items-center mb-4">
                    <label className="w-[-400px] block text-2xl font-medium text-gray-700 mr-2">Message: </label>
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
      
<p className='font-semibold mt-4'>Thank you!</p>


</div>
            </div>



          
        </div>
      </div>
    </div>
  )
}

export default page
