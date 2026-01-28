import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#f2f5ff]">

      <div className="px-4 sm:px-8 lg:px-50 py-12 lg:py-20 flex flex-col gap-6 lg:gap-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#343f5a]">
          Contact Us
        </h1>
        <p className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl">
          Home – Contact us
        </p>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-8 lg:px-50 bg-white py-10 gap-10">

        <img
          className="w-full max-w-md mx-auto lg:max-w-full"
          src="https://sdhub.in/wp-content/uploads/2024/06/2.jpg"
          alt="SD Hub"
        />

        <div className="text-[#8f9197] text-sm sm:text-base lg:text-xl flex flex-col gap-2 py-4 lg:py-10">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#343f5a]">
            List of Courses at SD HUB
          </p>

          <p>• Digital Marketing + Graphic Designing</p>
          <p>• Digital Marketing + Graphic Designing</p>
          <p>• Data Analytics</p>
          <p>• Tally ERP</p>
          <p>• Office Administration</p>
          <p>• Web Designing</p>

          <p className="text-blue-800 font-medium cursor-pointer pt-2">
            Register here
          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact
