import React from "react";
import "./Hauptseite.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import Beiträge from "./components/Beiträge";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";



function App() {
  const items =[
  { text: 'Home', link: '/start' },
  { text: 'Account', link: '/' },
  { text: 'Kategorien', link: '/' },
  { text: 'Anfrage stellen', link: '/anfrage' },
  { text: 'Meine Chats', link: '/' },
  ];

  return (
    <div className="hauptseite">
      <MenuIcon items={items} />
      <Link to='/'>
        <ZurueckIcon />
      </Link>
      <TitleBarHauptseite />
      <Beiträge />
    </div>
  );
}

export default App;

