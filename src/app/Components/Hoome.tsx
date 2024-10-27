
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hoome = () => {

  return (
    <div className=' bg-sky-200 p-28 flex items-center '>
      <div className='  max-w-[500px] ml-[-30px] '>
        <h1 className='font-bold mb-4 text-5xl'>Hi, I'm Asma Rj! </h1>
        <h2 className='text-4xl font-bold mb-2 text-red-400 animate-pulse' >FRONTENED WEB DEVELOPER.</h2>
        <p className='text-md mb-4'>Welcome to my portfolio website! My name is <b>Asma,</b> and I really want to become an <b>AI</b> and <b>front-end developer</b>. I enjoy learning new technologies and using them in real life.

          I am interested in creating beautiful and user-friendly web applications that make life easier for people. I always try to add creativity to my work to make each project unique and interesting.

          I have worked on different projects and welcome new challenges. I believe that with hard work and dedication, I can improve my skills even more.

          Thank you for taking the time to learn about me!</p>

        {/* {/* <Link href={'/'} className="relative inline-flex justify-center items-center w-[180px] h-[48px] rounded-[40px] text-[19px] font-semibold tracking-[1px] z-[1]">Hire Me</Link> */}
      </div>

      {/* Image */}
      <div className='flex justify-end  ml-56 ' >
        <Image src={'/profile.jpg'} alt={'profile'} width={300} height={300}

          className='flex rounded-full border-4 border-red-500 '
        ></Image>
      </div>

    </div>



  )
}
export default Hoome
