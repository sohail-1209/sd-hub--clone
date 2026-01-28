import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex flex-col w-full ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
