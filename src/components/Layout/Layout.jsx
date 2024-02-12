
import NavBar from "../NavBar/NavBar";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setTimeout(() => {
      
    }, 3000)
  }
  return (
    <div className="relative flex flex-col min-h-screen">
      <NavBar toggleMenu={toggleMenu} />
      {isOpen && <Nav setIsOpen={setIsOpen}/>}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
