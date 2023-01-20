import React from "react";
import "./Hauptseitegrün.css";
import TitleBarHauptseite from '../components/BeiträgeGrün/TitleBarHauptseitegrün';
import MenuIconGrün from "../components/Menü/MenüLogikGrün";
import Beiträgegrün from "../components/BeiträgeGrün/Beiträgegrün";
import ZurueckIcon from "../components/ZurückButton";
import { Link } from "react-router-dom";



function Appgrün() {
  const itemsgrün = [
    { text: 'Home', link: '/startgrün' },
    { text: 'Account', link: '/account' },
    { text: 'Kategorien', link: '/kategorien'  },
    { text: 'Meine Chats', link: '/chats' },
];
  
  return (
    <div className="itemslist">
      <MenuIconGrün items={itemsgrün} />
      <Link to='/'>
        <ZurueckIcon/>
      </Link>
      <TitleBarHauptseite />
      <Beiträgegrün />
    </div>
  );
}

export default Appgrün;

