import React, { useEffect, useState } from 'react'
import sdhub from "../assets/sdhub.jpg"
import all from "../assets/all.jpg"
import bell from "../assets/bell.png"


const Home = () => {
     const [count, setCount] = useState(0);

  const startCounter = () => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= 400) {
        clearInterval(interval);
      }
    }, 5);
  };
  return (
    <div className="flex flex-col gap-10 py-10">

  
  <div className="flex pl-50 py-10">

    <div className="flex flex-col gap-10 ">
      <p className="text-6xl font-bold w-[50vw]">
        Empowering Individuals 
        To Build Careers
      </p>

      <p className="text-[#777984] text-lg w-[35vw]">
        Our ultimate goal is to equip individuals not only in core domain skills
        but also softskills and language training to thrive in the competitive job market.
      </p>

      <button className="border border-blue-500 text-white px-10 py-2 bg-[#5081ff] rounded-xl w-40">
        Contact us  
      </button>
    </div>

    <div className="">
      <img className='w-250 ' src={sdhub} alt="sdhub" />
    </div>

  </div>

  <div className='flex gap-60 px-50 py-20'>
  <div className="flex flex-col gap-5">

    <p className="text-4xl">
      Delivering Job oriented Training Programs
    </p>

    <p className="text-[#777984] text-l">
      At SD Hub, we offer a wide range of job-oriented training programs. Whether you are
      interested in coding, software development, digital marketing, Web Development, etc..
      we have a program that suits your profile and interest.
    </p>
     

      </div>
        <img src={all} alt="all" />
 </div>
 <div className='grid grid-cols-2 grid-rows-1 gap-10 px-20'>
     <div className='gap-5 flex flex-col'>
          <p className='text-l text-blue-600'>WHAT WE DO</p>
          <p className='text-4xl'>Training Solutions Tailored to Industry</p>
          <p className='text-xl'>If you are confused about career choices, our career guidance counselor will make it easy for you to understand and take informed decisions. </p>
          <p className='text-xl'>Our courses are designed to be comprehensive, practical, and hands-on, ensuring that our participants graduate with the skills and confidence to excel in their chosen field.</p>
     </div>
     <div className='grid grid-cols-2 grid-rows-2 gap-4'>
           <div className=''><img className='h-15' src={bell} alt="bell" />
           <p className='text-xl'>Job Oriented Training</p>
           <p className='text-l'>Elevate your career prospects with our comprehensive, industry-focused training programs at SD HUB, designed to equip you with the skills demanded by employers.</p></div>
           <div className=''><img className='h-15' src={bell} alt="bell" />
           <p>Job Oriented Training</p>
           <p>Elevate your career prospects with our comprehensive, industry-focused training programs at SD HUB, designed to equip you with the skills demanded by employers.</p></div>
            <div className=''><img className='h-15' src={bell} alt="bell" />
           <p>Job Oriented Training</p>
           <p>Elevate your career prospects with our comprehensive, industry-focused training programs at SD HUB, designed to equip you with the skills demanded by employers.</p></div>
            <div className=''><img className='h-15' src={bell} alt="bell" />
           <p>Job Oriented Training</p>
           <p>Elevate your career prospects with our comprehensive, industry-focused training programs at SD HUB, designed to equip you with the skills demanded by employers.</p></div>
     </div>
 </div>
 <div className='flex flex-col items-center py-20 gap-2 '>
 <p className='text-3xl text-[#112256] font-medium'>Delivering Value</p>
 <p className='text-4xl text-[#112256] font-medium'>One candidate at a time</p>
 <div className='grid grid-cols-4 gap-20 py-10 ' onMouseEnter={startCounter}>
  <p className='text-7xl text-blue-500 font-thin flex flex-col items-center'>{count}+ <p className='text-xl text-black'>students</p> </p>
  <p className='text-7xl text-blue-500 font-thin'>{count/4}% <p className='text-xl text-black'>Positive Feedback</p></p>
  <p className='text-7xl text-blue-500 font-thin'>{count/80}+ <p className='text-xl text-black'>Batches</p></p>
  <p className='text-7xl text-blue-500 font-thin'>{count/100}+ <p className='text-xl text-black'>Courses</p></p>
  
 </div>
 </div>
</div>

  )
}

export default Home