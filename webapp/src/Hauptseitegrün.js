import React from "react";
import "./Hauptseitegrün.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIconGrün from "./components/MenuIconGrün";
import BeiträgeHelfer from "./components/BeiträgeHelfer";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";



function Appgrün() {
  return (
    <div className="hauptseitegrün">
      <MenuIconGrün items={['Home', 'Account', 'Kategorien' , 'Meine Chats']} />
      <Link to='/'>
        <ZurueckIcon/>
      </Link>
      <TitleBarHauptseite />
      <BeiträgeHelfer />
    </div>
  );
}

export default Appgrün;

