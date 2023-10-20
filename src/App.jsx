import manu from '/assets/images/manu1.jpg';
import './App.css'


const App = () => {
  return (
    <div className="bg-cyan-200">
      <div>
        <img className='img-home' src={manu} alt="" />
      </div>
      <div className="pt-12 text-center names">
        <p>Karina Moyetones</p>
        <p>&</p>
        <p>Manuel Ortunio</p>
      </div>
      <p className="pt-10 text-center date">March 28, 2024</p>
    </div>
  );
}

export default App
