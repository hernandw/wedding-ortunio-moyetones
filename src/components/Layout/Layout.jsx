import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
          <NavBar />
          <Nav />
      {children}
    </div>
  );
};

export default Layout;
