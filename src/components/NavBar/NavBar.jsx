import { Link } from "react-router-dom";
import logo from '/assets/images/logo.png'
import './NavBar.css'
import es from '/assets/icons/es.png'
import en from '/assets/icons/en.png'
import de from '/assets/icons/de.png'
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";



const NavBar = ({ toggleMenu }) => {
  const { i18n, t } = useTranslation();
  return (
    <nav className="flex items-center justify-between p-2 bg-cyan-600">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      {/* <div className="flex gap-3 sm:gap-5">
        <img onClick={()=> i18n.changeLanguage("es")} className="flags" src={es} alt="" />
        <img onClick={()=> i18n.changeLanguage("en")} className="flags" src={en} alt="" />
        <img onClick={()=> i18n.changeLanguage("de")} className="flags" src={de} alt="" />
      </div>
 */}
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
      <div className="hidden pl-10 menu-items md:block">
        <Link to="/home" className="text-white hover:text-gray-300">
          {t('home.home')}
        </Link>
        <Link to="/event" className="text-white hover:text-gray-300">
          {i18n.t('home.event')}
        </Link>
        <Link to="/groomsmen" className="text-white hover:text-gray-300">
          {t('home.groomsmen')}
        </Link>
        <Link to="/gallery" className="text-white hover:text-gray-300">
          {t('home.gallery')}
        </Link>
        <Link to="/faq" className="text-white hover:text-gray-300">
          {t('home.faq')}
        </Link>
        <Link to="/rsvp" className="text-white hover:text-gray-300">
          {t('home.rsvp')}
        </Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
} 

export default NavBar
