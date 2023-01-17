import React from "react";
import "./AnfrageStellen.css";
import TitleBarHauptseite from './components/BeiträgeLila/TitleBarHauptseiteLila';
import MenuIcon from "./components/Menü/MenuLogikLila";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import AnfrageFertigInhalt from "./components/AntragStellen/AnfrageFertigInhalt";


export default function AnfrageFertig() {
    const items =[
        { text: 'Home', link: '/start' },
        { text: 'Account', },
        { text: 'Kategorien',},
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
            <AnfrageFertigInhalt className="anfrage"/>
        </div>
    );
}