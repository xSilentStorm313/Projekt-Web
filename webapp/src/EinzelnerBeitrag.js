import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import BeitragInhalt from "./components/BeitragInhalt";
import Kommentare from "./components/Kommentare";

export default function EinzelnerBeitrag() {
    return (
        <div className="hauptseite">
            <MenuIcon items={['Home', 'Account', 'Kategorien', 'Anfrage stellen', 'Meine Chats']} />
            <TitleBarHauptseite />
            <BeitragInhalt />
            <Kommentare className="kommentar"/>
        </div>
    );
}