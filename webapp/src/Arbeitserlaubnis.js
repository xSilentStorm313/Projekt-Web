import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import BeitragInhaltArbeitserlaubnis from "./components/BeitragInhaltArbeitserlaubnis";
import Kommentare from "./components/Kommentare";

export default function Arbeitserlaubnis() {
    return (
        <div className="hauptseite">
            <MenuIcon items={['Home', 'Account', 'Kategorien', 'Anfrage stellen', 'Meine Chats']} />
            <TitleBarHauptseite />
            <BeitragInhaltArbeitserlaubnis />
            <Kommentare className="kommentar"/>
        </div>
    );
}