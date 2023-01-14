import React from "react";
import TitleBarRegistrierung from './components/Regestrierung/TitelBarRegistrieren';
// import RegistrierungText from "./components/Regestrierung/RegistrierenText";
import {RegestrierungText} from "./components/Regestrierung/RegistrierenText.js";
import './Registrieren.css';

function Registration() {
    return (
        <div className="Home">
            <TitleBarRegistrierung />
            <br/>
            <RegestrierungText/>
        </div>
    );
}

export default Registration;