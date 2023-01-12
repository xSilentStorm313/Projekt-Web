import React from "react";
import icon6 from "./BilderSocialMediaLogin/logoapple.svg"; 
import icon7 from "./BilderSocialMediaLogin/logogoogle.svg";
import icon8 from "./BilderSocialMediaLogin/logofacebook.svg";
import { Link } from "react-router-dom";



export default function SocialMediaLogin(){
    return (
        <div>
            <p>Oder melde dich an mit</p>
            <img src={icon8} className="icon" alt="icon" align="center" width="35" height="35"/>
            <img src={icon6} className="icon" alt="icon" align="center" width="35" height="35"/>
            <img src={icon7} className="icon" alt="icon" align="center" width="35" height="35"/>
            <p>Du hast kein Konto? <Link to="/registration" className="registrierung">Jetzt Registrieren</Link></p>
        </div>
    )
}