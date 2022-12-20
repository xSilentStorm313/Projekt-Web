import React from "react";
import "./EinzelnerBeitrag.css";
import TitleBarHauptseite from './components/TitleBarHauptseite';
import MenuIcon from "./components/MenuIcon";
import BeitragInhalt from "./components/BeitragInhalt"

export default function EinzelnerBeitrag() {
    return (
        <div className="hauptseite">
            <MenuIcon items={['Menu Item 1', 'Menu Item 2', 'Menu Item 3']} />
            <TitleBarHauptseite />
            <BeitragInhalt />
        </div>
    );
}