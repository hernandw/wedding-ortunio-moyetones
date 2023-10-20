import { Link } from "react-router-dom";
import logo from '/assets/images/logo.png'
import './NavBar.css'

const NavBar = ({ toggleMenu }) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-2 bg-cyan-600">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className="block md:hidden" onClick={toggleMenu}>
        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="menu-items items-center hidden space-x-4 md:block px-10">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/event" className="text-white hover:text-gray-300">
          Schedule
        </Link>
        <Link to="/groomsmen" className="text-white hover:text-gray-300">
          Wedding Party
        </Link>
        <Link to="/gallery" className="text-white hover:text-gray-300">
          Gallery
        </Link>
        <Link to="/faq" className="text-white hover:text-gray-300">
          FAQs
        </Link>
        <Link to="/rsvp" className="text-white hover:text-gray-300">
          RSVP
        </Link>
      </div>
    </nav>
  );
}

export default NavBar
