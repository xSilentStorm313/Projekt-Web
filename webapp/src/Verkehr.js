import React from "react";
import "./EinzelnerBeitraggrün.css";
import TitleBarHauptseite from './components/TitleBarHauptseitegrün';
import MenuIconGrün from "./components/Menü/MenüLogikGrün";
import Kommentare from "./components/Kommentare";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltVerkehrgrün from "./components/BeiträgeGrün/BeitagInhaltVerkehrgrün";

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
            <BeitragInhaltVerkehrgrün />
            <Kommentare className="kommentar" />
        </div>
    );
}