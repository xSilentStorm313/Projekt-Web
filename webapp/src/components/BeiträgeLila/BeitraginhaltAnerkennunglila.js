import React from "react";
import anerkennung from "./BeiträgeBilderLila/anerkennunngabschluesse.svg";
//import { MdAccountCircle } from "react-icons/md";

export default function BeitragInhaltAnerkennung() {

    return (
        <div className="abstand">
            <img src={anerkennung} className="formular" alt="formular" />
            <button className="downloadbutton">Download Formulare</button>
            <h1 className="überschrift1">Anerkennung der Abschlüsse</h1>
            <p className="text">In Deutschland kommt es bei der Anerkennung der Abschlüsse sehr auf den jeweiligen Abschluss an.</p>
            <div className="infotextasyl">Dementsprechend empfehlen wir Ihnen das <a href="https://www.anerkennung-in-deutschland.de/html/de/fachkraefte.php">Infoportal der Bundesregierung
                zur Anerkennung ausländischer Berufsqualifikationen</a> anzuschauen.</div>
            <p className="text">Geben sie in dies Suchleiste ihren Job ein, den sie in Ihrem Lang ausgeführt haben. Und das Portal führt sich durch die einzelnen Schritte die Sie brauchen um ihre Abschlüsse und Arbeitserfahrung in Deutschland anerkennen lassen zu können.</p>



            <p className="quellen">Quellen</p>
            <p className="beitrag-kommentar-überschrift">Kommentare</p>
        </div>
    );
}