import React from "react";
import TitleBarRegistrierung from './components/TitelBarregestrierung';
import ButtonRegistrierung from './components/ButtonRegestrierung';
import RegistrierungText from "./components/RegstrierungText";
import './App.css';

function Regestration() {
    return (
        <div className="Home">
            <TitleBarRegistrierung />
            <br/>
            <RegistrierungText/>
            <ButtonRegistrierung />
        </div>
    );
}

export default Regestration;