import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
      <Link to="/" className="text-2xl font-bold text-white">
        Wedding
      </Link>

      <div className="block md:hidden">
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
      <div className="items-center hidden space-x-4 md:block">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar
