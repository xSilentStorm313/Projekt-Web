import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import BeitragInhaltAsylantrag from "./components/BeitragInhaltAsylantrag";
import Kommentare from "./components/Kommentare";

export default function Asylantrag() {
    return (
        <div className="hauptseite">
            <MenuIcon items={['Home', 'Account', 'Kategorien', 'Anfrage stellen', 'Meine Chats']} />
            <TitleBarHauptseite />
            <BeitragInhaltAsylantrag />
            <Kommentare className="kommentar"/>
        </div>
    );
}