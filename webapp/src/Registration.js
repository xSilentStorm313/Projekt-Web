import React from "react";
import TitleBarRegistrierung from './components/TitelBarRegistrieren';
import ButtonRegistrierung from './components/ButtonRegistrieren';
import RegistrierungText from "./components/RegistrierenText";
import './Registrieren.css';

function Registration() {
    return (
        <div className="Home">
            <TitleBarRegistrierung />
            <br/>
            <RegistrierungText/>
            <ButtonRegistrierung />
        </div>
    );
}

export default Registration;