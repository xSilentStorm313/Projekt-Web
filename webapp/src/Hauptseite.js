import React from "react";
import "./Hauptseite.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import Beiträge from "./components/Beiträge";



function App() {
  return (
    <div className="hauptseite">
      <MenuIcon items={['Home', 'Account', 'Kategorien', 'Anfrage stellen', 'Meine Chats']} />
      <TitleBarHauptseite />
      <Beiträge />
    </div>
  );
}

export default App;

