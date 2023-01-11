import React from "react";
import "./EinzelnerBeitraggrün.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIconGrün from "./components/MenuIconGrün";
import Kommentare from "./components/Kommentare";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltRückkehr from "./components/BeitragInhaltRückkehr";

export default function Rückkehr() {
    const itemsgrün = ['Home', 'Account', 'Kategorien' , 'Meine Chats'];
    return (
        <div className="hauptseite">
            <MenuIconGrün items={itemsgrün} />
            <Link to='/startgrün'>
                <ZurueckIcon/>
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltRückkehr />
            <Kommentare className="kommentar"/>
        </div>
    );
}