import React from "react";
import "./Hauptseitegrün.css";
import TitleBarHauptseite from './components/TitleBarHauptseitegrün';
import MenuIconGrün from "./components/Menü/MenüLogikGrün";
import Beiträgegrün1 from "./components/BeiträgeGrün/Beiträgegrün";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";



function Appgrün() {
  const itemsgrün = [
    { text: 'Home', link: '/startgrün' },
    { text: 'Account', link: '/' },
    { text: 'Kategorien', link: '/' },
    { text: 'Meine Chats', link: '/' },
];
  
  return (
    <div className="hauptseitegrün">
      <MenuIconGrün items={itemsgrün} />
      <Link to='/'>
        <ZurueckIcon/>
      </Link>
      <TitleBarHauptseite />
      <Beiträgegrün1 />
    </div>
  );
}

export default Appgrün;

