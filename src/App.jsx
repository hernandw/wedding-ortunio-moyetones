import { useTranslation } from 'react-i18next';
import './App.css'
import es from "/assets/icons/es.png";
import en from "/assets/icons/en.png";
import de from "/assets/icons/de.png";
import Footer from './components/Footer/Footer';

const App = () => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center gap-5">
        <div>
          <img
            onClick={() => i18n.changeLanguage("es")}
            className="flags"
            src={es}
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() => i18n.changeLanguage("en")}
            className="flags"
            src={en}
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() => i18n.changeLanguage("de")}
            className="flags"
            src={de}
            alt=""
          />
        </div>
      </div>

      <div className="px-5 pt-8 sm:pt-8">
        <div className="text-center names">
          <p>Karina Alejandra Moyetones Bisbal</p>
          <p className="py-3 sm:py-1">&</p>
          <p className="px-6">Manuel Alejandro Ortunio Martínez</p>
        </div>
        <div className="acceso">
          <p className="p-4">{t("app.message")}</p>
          <form className="flex flex-col">
            <input
              className="form-control w-full px-3 py-1.5 text-gray-700 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder={t("app.placeholder")}
            />
            <button className="p-2 mt-6 text-white uppercase bg-blue-500 rounded hover:bg-blue-800 pointer">
              {t("app.button")}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
