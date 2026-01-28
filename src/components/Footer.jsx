import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className="bg-[#3b4661] text-white px-4 sm:px-8 lg:px-50 py-10 lg:py-30">

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">

        <div className="flex flex-col gap-6 lg:gap-10">
          <img
            className="w-[130px]"
            src="https://sdhub.in/wp-content/uploads/2023/04/sd-hub-white.png"
            alt="SD Hub"
          />

          <p className="text-sm sm:text-base leading-relaxed max-w-md">
            We believe that access to quality education should not be limited by financial
            constraints, and we strive to level the playing field for all.
          </p>
        </div>

        <div className="font-thin flex flex-col gap-2 lg:items-start">
          <p className="font-bold mb-2">Quick Links</p>
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/contact">Courses</Link>
        </div>
      </div>

      
      <div className="flex flex-col gap-6 text-[#98a2a2]">
        <hr className="border-gray-500" />
        <p className="text-center text-xs sm:text-sm">
          © Managed by Professionals Solidarity Forum. Sponsored by Support for Educational &
          Economic Development & Helping Hands Foundation.
        </p>
      </div>

    </div>
  )
}

export default Footer
