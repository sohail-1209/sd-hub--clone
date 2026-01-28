import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex py-10 justify-between px-50">

     
      <img className="h-18 w-auto " src={logo} alt="logo"  />

      
      <div className="flex gap-8 text-lg font-semibold items-center ">
        <Link to="/" className="hover:text-[#6094ff] hover:border-b-2 hover:duration-200">Home</Link>
        <Link to="/about" className="hover:text-[#6094ff] hover:border-b-2 hover:duration-200">About</Link>
        <Link to="/contact" className="hover:text-[#6094ff] hover:border-b-2 hover:duration-200">Courses</Link>
        <Link to="/services" className="hover:text-[#6094ff] hover:border-b-2 hover:duration-200">Services</Link>
         <button className="border border-blue-500 text-blue-500 px-6 py-2  rounded-l hover:bg-[#6095ff] hover:text-white hover:duration-1000" >
        Contact us
      </button>
      </div>

     

    </div>
  );
};

export default Navbar;
