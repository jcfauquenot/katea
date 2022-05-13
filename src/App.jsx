import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil";
import Token from "./components/Token";

// Méthode 1 des images : on importe chaque image

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </div>
  );
}

export default App;
