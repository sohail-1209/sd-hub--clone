import React, { useEffect, useState } from 'react'
import sdhub from "../assets/sdhub.jpg"
import all from "../assets/all.jpg"
import bell from "../assets/bell.png"
import { Link } from 'react-router'

const Home = () => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const counterSection = document.getElementById("counter-section")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true) // mark as started
          let current = 0
          const interval = setInterval(() => {
            current += 1
            setCount(current)
            if (current >= 400) clearInterval(interval)
          }, 5)
        }
      },
      { threshold: 0.3 }
    )

    if (counterSection) observer.observe(counterSection)

    return () => observer.disconnect()
  }, [started])
  
  return (
    <div className="flex flex-col gap-10 py-10">

      <div className="flex flex-col lg:flex-row lg:pl-50 px-4 sm:px-8 py-10 gap-10">
        <div className="flex flex-col gap-6 lg:gap-10">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold lg:w-[50vw]">
            Empowering Individuals <br />
            To Build Careers
          </p>
          <p className="text-[#777984] text-sm sm:text-base lg:text-lg lg:w-[35vw]">
            Our ultimate goal is to equip individuals not only in core domain skills
            but also softskills and language training to thrive in the competitive job market.
          </p>
          <button className="border border-blue-500 text-white px-8 lg:px-10 py-2 bg-[#5081ff] rounded-xl w-fit">
            <Link to="/contactt" className="hover:text-[#6094ff] hover:border-b-2 duration-200">Contact</Link>

          </button>
        </div>
        <div className="flex justify-center">
          <img className="w-full max-w-sm lg:w-250" src={sdhub} alt="sdhub" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-60 px-4 sm:px-8 lg:px-50 py-20">
        <div className="flex flex-col gap-5">
          <p className="text-2xl sm:text-3xl lg:text-4xl">
            Delivering Job oriented Training Programs
          </p>
          <p className="text-[#777984] text-sm sm:text-base lg:text-l">
            At SD Hub, we offer a wide range of job-oriented training programs.
            Whether you are interested in coding, software development, digital marketing,
            Web Development, etc.
          </p>
        </div>
        <img className="w-80% max-w-md mx-auto" src={all} alt="all" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-20">
        <div className="gap-4 lg:gap-5 flex flex-col">
          <p className="text-sm lg:text-l text-blue-600">WHAT WE DO</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl">
            Training Solutions Tailored to Industry
          </p>
          <p className="text-sm sm:text-base lg:text-xl">
            If you are confused about career choices, our career guidance counselor
            will make it easy for you to understand and take informed decisions.
          </p>
          <p className="text-sm sm:text-base lg:text-xl">
            Our courses are designed to be comprehensive, practical, and hands-on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <img className="h-10 w-10 lg:h-15" src={bell} alt="bell" />
              <p className="text-base lg:text-xl">Job Oriented Training</p>
              <p className="text-sm lg:text-l">
                Elevate your career prospects with our comprehensive,
                industry-focused training programs at SD HUB.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center py-20 gap-2">
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#112256] font-medium">
          Delivering Value
        </p>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-[#112256] font-medium">
          One candidate at a time
        </p>

        <div
          id="counter-section"
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 py-10"
        >
          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl lg:text-7xl text-blue-500 font-thin">
              {count}+
            </p>
            <p className="text-sm lg:text-xl">Students</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl lg:text-7xl text-blue-500 font-thin">
              {count / 4}%
            </p>
            <p className="text-sm lg:text-xl">Positive Feedback</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl lg:text-7xl text-blue-500 font-thin">
              {count / 80}+
            </p>
            <p className="text-sm lg:text-xl">Batches</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl lg:text-7xl text-blue-500 font-thin">
              {count / 100}+
            </p>
            <p className="text-sm lg:text-xl">Courses</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
