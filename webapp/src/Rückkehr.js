import React from "react";
import "./EinzelnerBeitraggrün.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import Kommentare from "./components/Kommentare";
import ZurueckIcon from "./components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltRückkehr from "./components/BeitragInhaltRückkehr";

export default function Rückkehr() {
    return (
        <div className="hauptseite">
            <MenuIcon items={['Home', 'Account', 'Kategorien', 'Meine Chats']} />
            <Link to='/startgrün'>
                <ZurueckIcon/>
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltRückkehr />
            <Kommentare className="kommentar"/>
        </div>
    );
}