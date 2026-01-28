import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-col bg-[#f2f5ff]'> 
      <div className='px-50 py-20 flex flex-col gap-10'>
          <h1 className='text-7xl text-[#343f5a]'> About Us</h1>
          <p className='text-[#aeb0b7] text-xl'>Home – About us</p>
      </div>
      <div className='grid grid-cols-2 grid-rows-4 gap-10 px-50 bg-white py-20'>
        <img src="https://sdhub.in/wp-content/uploads/2023/04/pic-22.jpg" alt="" />
        <div className='flex flex-col gap-3'>
          <p className='text-4xl text-[#343f5a]'>Dedicated to Your Success</p>
          <p className='text-[#aeb0b7] text-xl'>Welcome to Skills Development Hub, your premier destination for free job-oriented technology training programs. At Skills Development Hub, we are dedicated to empowering individuals with the skills and knowledge they need to succeed in today’s fast-paced and technology-driven world.

        Managed by Professionals Solidarity Forum (PSF) and supported by Helping Hand Foundation (HHF),ls Development Hub offers a dynamic learning environment where students can develop their talents and unleash their full potential.
       </p>
           </div>
        <img className='w-100' src="https://sdhub.in/wp-content/uploads/2024/06/PSF_LongLogo_Version-H.png" alt="" />
        <div className='text-[#aeb0b7] text-xl'>
          <p>MANAGED BY
      <p className='text-4xl text-[#343f5a]'>PSF – Professionals Solidarity Foundation</p>
      PSF’s vision is to empower professionals to use their skills, time, and creativity to bring a positive change in self and society. Committed to addressing the needs of seasoned professionals and fresh graduates alike, PSF offers top-tier, industry-specific training and comprehensive job and career guidance. Our mission is to support professionals in achieving excellence not only in their careers but also in their personal well-being, fostering a community where growth and positive impact are paramount.</p>
        </div>
        <img src="https://sdhub.in/wp-content/uploads/2024/06/Seed_Logo3.png" alt="" />
        <div className='text-[#aeb0b7] text-xl'>
          <p>SPONSORED BY
  <p className='text-4xl text-[#343f5a]'>SEED-Support for Education and Economic Development</p>
  SEED-Support for Education and Economic Development; is a USA based Charity Organization formed solely to help improve the quality of life for the under-privileged in India by providing the best Educational and Economical opportunities. Elevate the quality of their lives by providing optimum Medical Care, Quality Education & Hands-on Technical Skills trainings, and providing other prospects to improve the literacy status.</p>
        </div>
        <img src="https://sdhub.in/wp-content/uploads/2024/06/01.png" alt="" />
        <div className='text-[#aeb0b7] text-xl'>
          <p>SUPPORTED BY
    <p className='text-4xl text-[#343f5a]'>Helping Hand Foundation</p>
  About HHF (Helping Hand Foundation):
  Helping Hand Foundation is one of few organizations that’s working tirelessly with weaker sections, in bridging health inequity through its various programs and interventions. It was launched by a likeminded team of Hyderabad-based IT professionals with the aim and intent of to facilitate accessible and affordable healthcare to the disadvantaged sections of the society.</p>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default About