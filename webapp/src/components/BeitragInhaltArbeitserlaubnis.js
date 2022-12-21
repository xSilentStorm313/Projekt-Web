import React from "react";
import arbeitserlaubnis from "./images/arbeitserlaubnis.svg";

export default function BeitragInhaltArbeitserlaubnis() {

    return (
        <div>
        <br className="abstand"/>
            <img src={arbeitserlaubnis} className="formular" alt="formular"/>
            <h1 className="überschrift1">Arbeitserlaubnis</h1>
               <p className="text">Bürgerinnen und Bürger aus EU-Mitgliedstaaten und sog. EFTA-Staaten dürfen in Deutschland gemäß dem sogenannten Freizügigkeitsrecht ohne Einschränkung eine Beschäftigung aufnehmen. Sie sind inländischen Arbeitnehmerinnen und Arbeitnehmern gleichgestellt. Der Zugang von ausländischen Fachkräften aus Drittstaaten zum deutschen Arbeitsmarkt setzt in den meisten Fällen eine Zustimmung der Bundesagentur für Arbeit (BA) voraus.</p> 
            <a href="/arbeitserlaubnis"></a>
        </div>
    );
}