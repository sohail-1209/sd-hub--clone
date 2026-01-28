import React from 'react'

const Contactt = () => {
  return (
    <div className="flex flex-col bg-[#f2f5ff]">

  
      <div className="px-4 sm:px-8 lg:px-50 py-12 lg:py-20 flex flex-col gap-6 lg:gap-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#343f5a]">
          Contact us
        </h1>
        <p className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl">
          Home - Contact
        </p>
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white py-12 lg:py-20 gap-10">

       
        <div className="flex flex-col gap-4 px-4 sm:px-8 lg:px-20">
          <p className="text-[#577eff] text-sm sm:text-base lg:text-xl font-medium">
            CONTACT US
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Get in Touch with us
          </h1>
          <p className="text-sm sm:text-base">Phone : +91 955-012-5050</p>
          <p className="text-sm sm:text-base">Mail : info@sdhub.in</p>
          <p className="text-sm sm:text-base">
            Location : Mehdipatnam, Hyderabad
          </p>
        </div>


        <div className="flex flex-col px-4 sm:px-8 lg:px-20 gap-2">
          <label>Full name</label>
          <input
            className="border rounded-l h-10 px-2"
            type="text"
          />

          <label>Email</label>
          <input
            className="border rounded-l h-10 px-2"
            type="email"
          />

          <label>Phone</label>
          <input
            className="border rounded-l h-10 px-2"
            type="number"
          />

          <label>Your Message (optional)</label>
          <textarea
            className="h-32 lg:h-50 border rounded-l px-2 py-1"
          />

          <button className="w-fit px-4 py-2 mt-3 border rounded-l text-blue-800 hover:bg-blue-50">
            Submit
          </button>
        </div>

      </div>

    </div>
  )
}

export default Contactt
