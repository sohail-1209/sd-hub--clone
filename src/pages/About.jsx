import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col bg-[#f2f5ff]">

      
      <div className="px-4 sm:px-8 lg:px-50 py-12 lg:py-20 flex flex-col gap-6 lg:gap-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#343f5a]">
          About Us
        </h1>
        <p className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl">
          Home – About us
        </p>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-50 bg-white py-12 lg:py-20">

       
        <img
          className="w-full max-w-md mx-auto"
          src="https://sdhub.in/wp-content/uploads/2023/04/pic-22.jpg"
          alt="SD Hub"
        />

        <div className="flex flex-col gap-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#343f5a]">
            Dedicated to Your Success
          </p>
          <p className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl leading-relaxed">
            Welcome to Skills Development Hub, your premier destination for free job-oriented
            technology training programs. At Skills Development Hub, we are dedicated to
            empowering individuals with the skills and knowledge they need to succeed in
            today’s fast-paced and technology-driven world.
            <br /><br />
            Managed by Professionals Solidarity Forum (PSF) and supported by Helping Hand
            Foundation (HHF), Skills Development Hub offers a dynamic learning environment
            where students can develop their talents and unleash their full potential.
          </p>
        </div>

       
        <img
          className="w-full max-w-sm mx-auto"
          src="https://sdhub.in/wp-content/uploads/2024/06/PSF_LongLogo_Version-H.png"
          alt="PSF"
        />

        <div className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl leading-relaxed">
          <p className="uppercase tracking-wide text-sm">Managed By</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#343f5a] py-2">
            PSF – Professionals Solidarity Foundation
          </p>
          PSF’s vision is to empower professionals to use their skills, time, and creativity
          to bring a positive change in self and society. PSF offers industry-specific
          training and comprehensive job and career guidance, supporting professionals in
          achieving excellence in both career and personal well-being.
        </div>

       
        <img
          className="w-full max-w-xs mx-auto"
          src="https://sdhub.in/wp-content/uploads/2024/06/Seed_Logo3.png"
          alt="SEED"
        />

        <div className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl leading-relaxed">
          <p className="uppercase tracking-wide text-sm">Sponsored By</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#343f5a] py-2">
            SEED – Support for Education and Economic Development
          </p>
          SEED is a USA-based charity organization dedicated to improving the quality of life
          for underprivileged communities in India through education, economic development,
          medical care, and hands-on technical skills training.
        </div>

       
        <img
          className="w-full max-w-xs mx-auto"
          src="https://sdhub.in/wp-content/uploads/2024/06/01.png"
          alt="HHF"
        />

        <div className="text-[#aeb0b7] text-sm sm:text-base lg:text-xl leading-relaxed">
          <p className="uppercase tracking-wide text-sm">Supported By</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#343f5a] py-2">
            Helping Hand Foundation
          </p>
          Helping Hand Foundation works tirelessly to bridge health inequity by providing
          accessible and affordable healthcare to disadvantaged communities through
          sustainable programs and interventions.
        </div>

      </div>
    </div>
  )
}

export default About
