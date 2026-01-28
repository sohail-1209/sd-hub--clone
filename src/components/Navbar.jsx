import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-50 py-4 lg:py-10">

     
      <img className="h-14 lg:h-18 w-auto" src={logo} alt="logo" />

      
      <div className="hidden lg:flex gap-8 text-lg font-semibold items-center">
        <Link to="/" className="hover:text-[#6094ff] hover:border-b-2 duration-200">Home</Link>
        <Link to="/about" className="hover:text-[#6094ff] hover:border-b-2 duration-200">About</Link>
        <Link to="/contact" className="hover:text-[#6094ff] hover:border-b-2 duration-200">Courses</Link>
        <Link to="/services" className="hover:text-[#6094ff] hover:border-b-2 duration-200">Services</Link>
        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-l hover:bg-[#6095ff] hover:text-white duration-300">
          Contact us
        </button>
      </div>

      
      <button
        className="lg:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 text-lg font-semibold z-50">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Courses</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-[#6095ff] hover:text-white duration-300">
            Contact us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
