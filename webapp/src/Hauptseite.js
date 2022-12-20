import React from "react";
import "./Hauptseite.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import Beiträge from "./components/Beiträge";



function App() {
  return (
    <div className="hauptseite">
      <MenuIcon items={['Menu Item 1', 'Menu Item 2', 'Menu Item 3']} />
      <TitleBarHauptseite />
      <Beiträge />
    </div>
  );
}

export default App;

