import React from "react";
import "./Hauptseitelila.css";
import TitleBarHauptseite from './components/BeiträgeLila/TitleBarHauptseiteLila';
import MenuIcon from "./components/Menü/MenuLogikLila";
import Beiträgelila from "./components/BeiträgeLila/Beiträgelila";
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
      <Beiträgelila />
    </div>
  );
}

export default App;

