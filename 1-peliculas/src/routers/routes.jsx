import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import {Descripcion} from "../pages/Descripcion";

export function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/movies/:movieId" element={<Descripcion/>} />
      </Routes>
    </Router>
  );
}