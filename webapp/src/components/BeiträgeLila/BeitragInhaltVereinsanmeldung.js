import React from "react";
import sportverein from "./BeiträgeBilderLila/sportverein.svg";
import { MdAccountCircle } from "react-icons/md";

export default function BeitragInhaltVereinsanmeldung() {

    return (
        <div className="abstand">
            <img src={sportverein} className="formular" alt="formular" />
            <button className="downloadbutton">Download Formulare</button>
            <h1 className="überschrift1">Vereinsanmeldung</h1>
            <p className="text">In Deutschland kommt es bei der Anerkennung der Abschlüsse sehr auf den jeweiligen Abschluss an.</p>
            <div className="infotextasyl">Dementsprechend empfehlen wir Ihnen das <a href="https://www.anerkennung-in-deutschland.de/html/de/fachkraefte.php">Infoportal der Bundesregierung
                zur Anerkennung ausländischer Berufsqualifikationen</a> anzuschauen.</div>
            <p className="text">Geben sie in dies Suchleiste ihren Job ein, den sie in Ihrem Lang ausgeführt haben. Und das Portal führt sich durch die einzelnen Schritte die Sie brauchen um ihre Abschlüsse und Arbeitserfahrung in Deutschland anerkennen lassen zu können.</p>



            <p className="quellen">Quellen</p>

            <p className="komment">Was ist wenn ich meinen Geburtsurkunde verloren habe? Ist das schlimm? Kann ich die irgendwo neu beantragen?
                <br />
                <MdAccountCircle size={30} className="Profilbild antwort" />
                <button className="buttonantworten">Antworten</button></p>
            <p className="antwortkomment">Was ist wenn ich meinen Geburts- urkunde verloren habe? Ist das schlimm?Kann ich die irgendwo neu beantragen?
                <br />
                <MdAccountCircle size={30} className="Profilbild antwort" />
                <button className="buttonantworten">Antworten</button></p>
            <p className="komment">Was ist wenn ich den Termin für die Anhörung verpasse?
                <br />
                <MdAccountCircle size={30} className="Profilbild antwort" />
                <button className="buttonantworten">Antworten</button></p>
        </div>
    );
}