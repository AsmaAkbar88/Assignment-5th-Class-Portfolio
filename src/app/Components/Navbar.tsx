import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    
    <nav className='bg-red-500 p-4 space-x-32 font-bold flex justify-end '>
      
      <Link href={'/'} className='hover:text-yellow-100'>Home</Link>
      <Link href={'/About'} className='hover:text-yellow-100'>About</Link>

      <Link href={'/Contact'} className='hover:text-yellow-100'>Contact</Link>
      </nav>
  
    
  )

}

export default Navbar
