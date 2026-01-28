import React from 'react'

const Contact = () => {
  return (
  <div className='flex flex-col bg-[#f2f5ff]'> 
      <div className='px-50 py-20 flex flex-col gap-10'>
          <h1 className='text-7xl text-[#343f5a]'> Contact Us</h1>
          <p className='text-[#aeb0b7] text-xl'>Home – Contact us</p>
      </div>
      <div className='grid grid-cols-2 px-50 bg-white py-10 gap-10'>
        <img src="https://sdhub.in/wp-content/uploads/2024/06/2.jpg" alt="" />
    <div className='text-[#8f9197] text-xl flex flex-col gap-2 py-10 '>
    <p className='text-4xl text-[#343f5a]'>List of Courses at SD HUB</p>
`    <p> • Digital Marketing + Graphic Designing</p>
    <p>• Digital Marketing + Graphic Designing</p>
    <p>• Data Analytics</p>
    <p>• Tally ERP</p>
    <p>• Office Administration</p>
    <p>• Web Designing</p>
    <p className='text-blue-800 font-medium'>Register here </p>

  </div>
      </div>
      
    </div>
  )
}

export default Contact