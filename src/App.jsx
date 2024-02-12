import "./App.css";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  const [isValid, setIsValid] = useState(false)
  return (
    <div>
      {/* <div className="flex justify-center gap-5">
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
      </div> */}

      {isValid ? <Layout /> : <Login setIsValid={setIsValid}  />}

      
    </div>
  );
};

export default App;
