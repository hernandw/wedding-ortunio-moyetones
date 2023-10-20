
import NavBar from "../NavBar/NavBar";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setTimeout(() => {
      
    }, 3000)
  }
  return (
    <div className="flex flex-col min-h-screen relative">
      <NavBar toggleMenu={toggleMenu} />
      {isOpen && <Nav setIsOpen={setIsOpen}/>}
      <Outlet />
    </div>
  );
};

export default Layout;
