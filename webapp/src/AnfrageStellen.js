import React from "react";
import "./AnfrageStellen.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import AnfrageStellenInhalt from "./components/AntragStellen/AnfrageStellenInhalt";


export default function AnfrageStellen() {
    return (
        <div className="hauptseite">
            <MenuIcon items={['Home', 'Account', 'Kategorien', 'Anfrage stellen', 'Meine Chats']} />
            <Link to='/start'>
                <ZurueckIcon/>
            </Link>
            <TitleBarHauptseite />
            <AnfrageStellenInhalt className="anfrage"/>
        </div>
    );
}