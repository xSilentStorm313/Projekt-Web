import React from "react";
import { Link } from "react-router-dom";


export default function AntragFertigInhalt() {
    return (
        <div className="button">
            <br className="abstand"/>
            <h1 className="überschriftantragfertig">Dein Antrag wurde aufgenommen!</h1>
            <p className="textantragfertig">Es kann etwas dauern, bis du eine Antwort bekommst. <br/>Du erhälst dann sofort eine Benachrichtigung.</p>
            <br/>
            <Link to="/anfrage">
            
            <input type="submit" value="+ Neuer Antrag" className="buttonneuerantrag"/>
            </Link>
            <br/>
            <br/>
            <Link to="/start">
            <input type="submit" value="Fertig" className="buttonantragfertig"/>
            </Link>
        </div>
    ) }