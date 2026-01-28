import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    <div className='bg-[#3b4661]  text-white px-50 py-30'>

    
    <div className=' grid grid-cols-2 gap-10 py-10'>
      <div className='flex flex-col gap-10'>
        <img className='w-[130px]' src="https://sdhub.in/wp-content/uploads/2023/04/sd-hub-white.png" alt="" />
        <p>We believe that access to quality education should not be limited by financial constraints,
           and we strive to level the playing field for all.</p>
          <div>
      
          </div>
      </div>
      <div className='font-thin flex flex-col gap-2'>
        <p className='font-bold'>Quick Links</p>
         <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Courses</Link>
      <div></div>
      </div>
    </div>
    <div className='flex flex-col gap-10 text-[#98a2a2]'>
      <hr className='font-thin' />
      <p className='text-center text-m'>© Managed by Professionals Solidarity Forum. Sponsored by Support for Educational & Economic Development & Helping Hands Foundation.</p>

    </div>
    </div>
    </>
  )
}

export default Footer