import React from "react";
import anerkennung from "./BeiträgeBilderLila/anerkennunngabschluesse.svg";
//import { MdAccountCircle } from "react-icons/md";

export default function BeitragInhaltAnerkennung() {

    return (
        <div className="abstand2">
            <img src={anerkennung} className="formular" alt="formular" />
            <button className="downloadbutton">Formulare herunterladen</button>
            <h2 className="überschrift1">Anerkennung der Abschlüsse</h2>
            <p className="text">In Deutschland kommt es bei der Anerkennung der Abschlüsse sehr auf den jeweiligen Abschluss an.</p>
            <div className="infotextasyl">Dementsprechend empfehlen wir Ihnen das <a href="https://www.anerkennung-in-deutschland.de/html/de/fachkraefte.php">Infoportal der Bundesregierung
                zur Anerkennung ausländischer Berufsqualifikationen</a> anzuschauen.</div>
            <p className="text">Geben Sie Ihren Job in die Suchleiste ein, den Sie in Ihrem Land ausgeführt haben. Und das Portal führt Sie durch die einzelnen Schritte, die Sie brauchen um Ihre Abschlüsse und Arbeitserfahrung in Deutschland anerkennen lassen zu können.</p>



            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <div class="line"></div>
            <br />
        </div>
    );
}