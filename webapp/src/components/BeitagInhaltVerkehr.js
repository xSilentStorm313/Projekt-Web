import React from "react";
import verkehr from "./images/verkehr.png";
import { MdAccountCircle, MdDetails } from "react-icons/md";

// https://www.bamf.de/DE/Themen/Rueckkehr/FoerderprogrammREAGGARP/reaggarp-node.html

export default function BeitragInhaltVerkehr() {

    return (
        <div className="abstand">
            <img src={verkehr} className="formular" alt="formular" />
            <button className="downloadbuttongrün">Download Formulare</button>
            <h1 className="überschrift1">Geflüchtete aus der Ukraine fahren kostenlos mit den Verkehrsmitteln im MVV</h1>
            <div className="infotextasylgrün">Gemeinsam haben sich Verkehrsunternehmen und Gesellschafter im Münchner Verkehrs- und Tarifverbund (MVV) entschlossen, schnell und unbürokratisch Hilfe zu leisten. Flüchtende aus der Ukraine können die öffentlichen Verkehrsmittel im MVV-Raum ab sofort kostenlos nutzen.</div>
            <p className="text">
            „Auch wir möchten in dieser unsteten und schwierigen Situation, die wir besorgt verfolgen, unseren Beitrag leisten“, so MVV-Geschäftsführer Dr. Bernd Rosenbusch. „Die Deutsche Bahn unterstützt die Ukrainerinnen und Ukrainer dabei, in Richtung Deutschland zu fliehen. Innerhalb des MVV-Raums können die Flüchtenden nun auch die öffentlichen Verkehrsmittel kostenlos nutzen, um zu Unterkünften, zur Familie und zu Bekannten zu gelangen. Die schnelle Abstimmung zwischen allen Beteiligten im MVV-Raum zeigt deutlich, wie eng wir alle in dieser Situation zusammenstehen – und an der Seite des ukrainischen Volkes.“</p>
            <p className="text">
            Die MVV-Gesellschafter und die Verkehrsunternehmen im Verbund ermöglichen geflüchteten Menschen mit ukrainischem Pass oder Personalausweis ab sofort die kostenlose Nutzung aller Verkehrsmittel im gesamten MVV-Gebiet. Damit soll ihnen die Weiterreise innerhalb des MVV-Verbundgebiets erleichtert werden. Das Angebot gilt bis auf Weiteres.
            </p>

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