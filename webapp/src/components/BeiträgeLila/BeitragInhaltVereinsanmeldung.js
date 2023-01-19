import React from "react";
import sportverein from "./BeiträgeBilderLila/sportverein.svg";
//import { MdAccountCircle } from "react-icons/md";

export default function BeitragInhaltVereinsanmeldung() {

    return (
        <div className="abstand2">
            <img src={sportverein} className="formular" alt="formular" />
            <button className="downloadbutton">Download Formulare</button>
            <h1 className="überschrift1">Vereinsanmeldung</h1>
            <p className="text">In Deutschland kommt es bei der Anerkennung der Abschlüsse sehr auf den jeweiligen Abschluss an.</p>
            <div className="infotextasyl">Dementsprechend empfehlen wir Ihnen das <a href="https://www.anerkennung-in-deutschland.de/html/de/fachkraefte.php">Infoportal der Bundesregierung
                zur Anerkennung ausländischer Berufsqualifikationen</a> anzuschauen.</div>
            <p className="text">Geben Sie in die Suchleiste Ihren Job ein, den Sie in Ihrem Land ausgeführt haben. Und das Portal führt Sie durch die einzelnen Schritte, die Sie brauchen, um Ihre Abschlüsse und Ihre Arbeitserfahrung in Deutschland anerkennen lassen zu können.</p>



            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <div class="line"></div>
            <br />
        </div>
    );
}