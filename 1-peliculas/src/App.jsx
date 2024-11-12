import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Rutas } from "./routers/routes";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎞️Peliculas</h1>
      </header>
      <Rutas />
    </div>
  );
}

export default App;
