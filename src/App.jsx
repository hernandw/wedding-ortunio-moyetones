import manu from '/assets/images/manu1.jpg';
import './App.css'
import { useTranslation } from 'react-i18next';


let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];
const App = () => {

  const {t } = useTranslation()
  return (
    <div className="bg-cyan-200">
      <div>
        <img className="img-home" src={manu} alt="" />
      </div>
      <div className="pt-12 text-center names">
        <p >Karina Moyetones</p>
        <p >&</p>
        <p>Manuel Ortunio</p>
      </div>
      <p className="pt-10 text-center date">{t("home.date")}</p>
    </div>
  );
}

export default App
