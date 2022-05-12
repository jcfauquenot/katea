import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil";
import Page2 from "./components/Page2";
import Token from "./components/Token";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/page" element={<Page2 />} />
        <Route path="/greenMining" element={<greenMining />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </div>
  );
}

export default App;
