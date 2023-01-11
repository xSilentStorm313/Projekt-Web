import React from "react";
import "./EinzelnerBeitraggrün.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIconGrün from "./components/MenuIconGrün";
import Kommentare from "./components/Kommentare";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltVerkehr from "./components/BeitagInhaltVerkehr";

export default function Verkehr() {
    const itemsgrün = [
        { text: 'Home', link: '/startgrün' },
        { text: 'Account', link: '/' },
        { text: 'Kategorien', link: '/' },
        { text: 'Meine Chats', link: '/' },
    ];
    return (
        <div className="hauptseite">
            <MenuIconGrün items={itemsgrün} />
            <Link to='/startgrün'>
                <ZurueckIcon />
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltVerkehr />
            <Kommentare className="kommentar" />
        </div>
    );
}