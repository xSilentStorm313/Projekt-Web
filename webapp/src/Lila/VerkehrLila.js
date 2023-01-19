import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from '../components/BeiträgeLila/TitleBarHauptseiteLila.js';
import MenuIcon from "../components/Menü/MenuLogikLila";
import Kommentare from "../components/Kommentare/KommentareAusgeben";
import ZurueckIcon from "../components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltVerkehr from "./BeitagInhaltVerkehrLila";

export default function VerkehrLila() {
    const items =[
        { text: 'Home', link: '/start' },
        { text: 'Account', },
        { text: 'Kategorien',  },
        { text: 'Anfrage stellen', link: '/anfrage' },
        { text: 'Meine Chats', },
        ];

    return (
        <div className="hauptseite">
            <MenuIcon items={items} />
            <Link to='/start'>
                <ZurueckIcon />
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltVerkehr />
            <Kommentare />
        </div>
    );
}