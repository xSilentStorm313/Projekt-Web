import React from "react";
import icon6 from "./images/logoapple.svg"; 
import icon7 from "./images/logogoogle.svg";
import icon8 from "./images/logofacebook.svg";


export default function SocialMediaLogin(){
    return (
        <div>
            <p>Oder melde dich an mit</p>
            <img src={icon8} className="icon" alt="icon" align="center" width="35" height="35"/>
            <img src={icon6} className="icon" alt="icon" align="center" width="35" height="35"/>
            <img src={icon7} className="icon" alt="icon" align="center" width="35" height="35"/>
            <p>Du hast kein Konto? <b>Registrieren</b></p>
        </div>
    )
}