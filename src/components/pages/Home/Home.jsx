import manu from "/assets/images/manu1.jpg";
import "./Home.css";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-cyan-200">
      <div>
        <img className="img-home" src={manu} alt="" />
      </div>
      <div className="pt-12 text-center names">
        <p>Karina Moyetones</p>
        <p>&</p>
        <p>Manuel Ortunio</p>
      </div>
      <p className="pt-10 text-center date">{t("home.date")}</p>
    </div>
  );
};

export default Home;
