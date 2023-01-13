import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from '../components/BeiträgeLila/TitleBarHauptseiteLila';
import MenuIcon from "../components/Menü/MenuLogikLila";
import BeitragInhaltAsylantrag from "../components/BeiträgeLila/BeitragInhaltAsylantrag";
import Kommentare from "../components/KommentareAlt";
import ZurueckIcon from "../components/ZurückButton";
import { Link } from "react-router-dom";

export default function Asylantrag() {
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
            <BeitragInhaltAsylantrag />
            <Kommentare className="kommentar"/>
        </div>
    );
}