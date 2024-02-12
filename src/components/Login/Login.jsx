import  { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

const Login = ({setIsValid}) => {
    const [miLogin, setMiLogin] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { i18n, t } = useTranslation();
    const sesionStart = (e) => {
      e.preventDefault();
      if (password === "") {
        setError(true);
      } else {
        if (password.trim() === "KYM28032024") {
          setError(false);
          setIsValid(true);
         
        } else {
          setError(true);
          setPassword("");
          document.getElementById("password").focus();
        }
      }
    };
  return (
    <div id="home" className="flex flex-col justify-between h-screen">
      <div className="px-4 pt-16 text-center names">
        <p>Karina Alejandra Moyetones Bisbal</p>
        <p className="py-3 sm:py-1">&</p>
        <p className="px-6">Manuel Alejandro Ortunio Martínez</p>
      </div>
      <div className="mx-auto acceso w-96 sm:w-2/3">
        <p className="p-4">{t("app.message")}</p>
        <form onSubmit={sesionStart} className="flex flex-col p-2">
          {error && <Error msj="El código de acceso es incorrecto" />}
          <input
            id="password"
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded form-control focus:outline-none focus:border-indigo-500"
            type="password"
            placeholder={t("app.placeholder")}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="p-2 mt-6 text-white uppercase bg-blue-500 rounded hover:bg-blue-800 pointer">
            {t("app.button")}
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Login
