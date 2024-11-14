
import React from 'react'
import Image from 'next/image'

const page = () => {

  return (

    <div className=' bg-sky-200 p-20 ml-20 flex items-center'>
      <div className='  max-w-[500px] ml-[-30px] '>
        <h1 className='font-bold mb-4 text-5xl'>About Me </h1>
        <h2 className='text-3xl font-bold mb-6 text-red-400 animate-pulse' >FRONTENED WEB DEVELOPER.</h2>

        <p className='mb-6 text-lg'>I have experience working with modern technologies like HTML, CSS, TypeScript, and JavaScript. Right now, I am expanding my skills in Next.js. I enjoy creating clean, responsive, and user-friendly websites, and I am always excited to learn new tools and technologies.</p>
      </div>
      {/* /* Image */}

      <div className='flex justify-end  ml-56 '>
        <Image src={'/Html.png'} alt={'profile'} width={400} height={400}

          className=' border-4 border-red-500 '
        ></Image>
      </div>
    </div>


  )
}

export default page
