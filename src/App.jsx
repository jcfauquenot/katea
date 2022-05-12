import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil";
import Page2 from "./components/Page2";
import GreenMining from "./components/GreenMining";
// Méthode 1 des images : on importe chaque image

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/page" element={<Page2 />} />
        <Route path="/greenmining" element={<GreenMining />} />
      </Routes>
    </div>
  );
}

export default App;
