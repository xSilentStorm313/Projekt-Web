import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import Kommentare from "./components/Kommentare";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltVereinsanmeldung from "./components/BeitragInhaltVereinsanmeldung";

export default function Wohngeld() {
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
            <Link to='/start'>
                <ZurueckIcon/>
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltVereinsanmeldung />
            <Kommentare className="kommentar"/>
        </div>
    );
}