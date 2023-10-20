import { Link } from "react-router-dom";
import cerrar from "/assets/icons/cerrar.svg";
import './Nav.css'

const Nav = ({ setIsOpen }) => {
  const ocultarModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      console.log('... desapareciendo')
    }, 500);
  };
  return (
    <div className="menu items-center grid-rows-7 text-center bg-white absolute top-0 right-0 bottom-0 p-10 left-28">
      <div>
        <img className="cerrar" src={cerrar} alt="" onClick={ocultarModal} />
      </div>
      <div>
        <p className="text-xl font-bold pt-4">Manuel & Karina</p>
        <p className="text-sm text-stone-600 pb-4">March, 28, 2024</p>
        <hr />
      </div>
      <div className="flex flex-col space-y-4 text-2xl pt-6">
        <Link to="/" className="font-bold hover:text-gray-300">
          Home
        </Link>
        <Link to="/event" className="font-bold hover:text-gray-300">
          Schedule
        </Link>
        <Link to="/groomsmen" className="font-bold hover:text-gray-300">
          Wedding Party
        </Link>
        <Link to="/gallery" className="font-bold hover:text-gray-300">
          Gallery
        </Link>
        <Link to="/faq" className="font-bold hover:text-gray-300">
          FAQs
        </Link>
        <Link to="/rsvp" className="font-bold hover:text-gray-300">
          RSVP
        </Link>
      </div>
    </div>
  );
};

export default Nav
