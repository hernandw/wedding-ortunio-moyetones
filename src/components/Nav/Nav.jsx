import { Link } from "react-router-dom";
import cerrar from "/assets/icons/cerrar.svg";
import './Nav.css';
import PropTypes from "prop-types";

const Nav = ({ setIsOpen }) => {
  const ocultarModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      console.log('... desapareciendo')
    }, 500);
  };
  return (
    <div className="absolute top-0 bottom-0 right-0 z-10 items-center p-10 text-center bg-white menu grid-rows-7 left-28">
      <div>
        <img className="cerrar" src={cerrar} alt="" onClick={ocultarModal} />
      </div>
      <div>
        <p className="pt-4 text-xl font-bold">Karina & Manuel</p>
        <p className="pb-4 text-sm text-stone-600">March, 28, 2024</p>
        <hr />
      </div>
      <div className="flex flex-col pt-6 space-y-4 text-2xl">
        <Link to="/home" className="font-bold hover:text-gray-300">
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

Nav.propTypes = {
  setIsOpen: PropTypes.func.isRequired
}

export default Nav
