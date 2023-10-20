import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" index element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App
