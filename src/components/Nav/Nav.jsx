import { Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="items-center grid-rows-3 text-center bg-purple-400">
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
  );
}

export default Nav
