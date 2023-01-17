import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from '../components/BeiträgeLila/TitleBarHauptseiteLila';
import MenuIcon from "../components/Menü/MenuLogikLila";
import BeitragInhaltKindergeld from "../components/BeiträgeLila/BeitragKindergeld";
import Kommentare from "../components/Kommentare/KommentareAusgeben";
import ZurueckIcon from "../components/ZurückButton";
import { Link } from "react-router-dom";

export default function EinzelnerBeitrag() {
    const items =[
        { text: 'Home', link: '/start' },
        { text: 'Account',  },
        { text: 'Kategorien',  },
        { text: 'Anfrage stellen', link: '/anfrage' },
        { text: 'Meine Chats', },
        ];
      
    return (
        <div className="hauptseite">
            <MenuIcon items={items} />
            <Link to='/start'>
                <ZurueckIcon/>
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltKindergeld />
            <Kommentare />
        </div>
    );
}