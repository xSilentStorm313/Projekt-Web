import React from "react";
import verkehr from "./BilderbeiträgeGrün/verkehr.png";
//import { MdAccountCircle } from "react-icons/md";

// https://www.bamf.de/DE/Themen/Rueckkehr/FoerderprogrammREAGGARP/reaggarp-node.html

export default function BeitragInhaltVerkehr() {

    return (
        <div className="abstand2">
            <img src={verkehr} className="formular" alt="formular" />
            <button className="downloadbuttongrün">Formulare herunterladen</button>
            <h1 className="überschrift1">Verkehr</h1>
            <p className="textgrün">Geflüchtete aus der Ukraine fahren kostenlos mit den Verkehrsmitteln im MVV.</p>
            <div className="infotextasylgrün">Gemeinsam haben sich Verkehrsunternehmen und Gesellschaften im Münchner Verkehrs- und Tarifverbund (MVV) entschlossen, schnell und unbürokratisch Hilfe zu leisten. Flüchtende aus der Ukraine können die öffentlichen Verkehrsmittel im MVV-Raum ab sofort kostenlos nutzen.</div>
            <p className="textgrün">
            „Auch wir möchten in dieser schwierigen Situation, die wir besorgt verfolgen, unseren Beitrag leisten“, so MVV-Geschäftsführer Dr. Bernd Rosenbusch. „Die Deutsche Bahn unterstützt die Ukrainerinnen und Ukrainer dabei, in Richtung Deutschland zu fliehen. Innerhalb des MVV-Raums können die Flüchtenden nun auch die öffentlichen Verkehrsmittel kostenlos nutzen, um zu Unterkünften, zur Familie und zu Bekannten zu gelangen. Die schnelle Abstimmung zwischen allen Beteiligten im MVV-Raum zeigt deutlich, wie eng wir alle in dieser Situation zusammenstehen – und an der Seite des ukrainischen Volkes.“</p>
            <p className="textgrün">
            Die MVV-Gesellschaft und die Verkehrsunternehmen im Verbund ermöglichen geflüchteten Menschen mit ukrainischem Pass oder Personalausweis ab sofort die kostenlose Nutzung aller Verkehrsmittel im gesamten MVV-Gebiet. Damit soll ihnen die Weiterreise innerhalb des MVV-Verbundgebiets erleichtert werden. Das Angebot gilt bis auf Weiteres.
            </p>

            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <div class="line"></div>
            <br />
        </div>
    );
}