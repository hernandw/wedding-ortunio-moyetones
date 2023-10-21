import manu from '/assets/images/manu1.jpg';
import './App.css'
import Gallery from './components/pages/Gallery/Gallery';

let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];
const App = () => {
  return (
    <div className="bg-cyan-200">
      <div>
        <img className="img-home" src={manu} alt="" />
      </div>
      <div className="pt-12 text-center names">
        <p className="pb-16">Karina Moyetones</p>
        <p className="pb-16">&</p>
        <p>Manuel Ortunio</p>
      </div>
      <p className="pt-10 text-center date">March 28, 2024</p>
    </div>
  );
}

export default App
