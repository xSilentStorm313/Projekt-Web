import React from "react";
import TitleBarRegistrierung from './components/Regestrierung/TitelBarRegistrieren';
import ButtonRegistrierung from './components/Regestrierung/ButtonRegistrieren';
import RegistrierungText from "./components/Regestrierung/RegistrierenText";
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