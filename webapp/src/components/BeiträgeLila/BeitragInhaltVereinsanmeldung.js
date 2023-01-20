import React from "react";
import sportverein from "./BeiträgeBilderLila/sportverein.svg";
//import { MdAccountCircle } from "react-icons/md";

export default function BeitragInhaltVereinsanmeldung() {

    return (
        <div className="abstand2">
            <img src={sportverein} className="formular" alt="formular" />
            <button className="downloadbutton">Formulare herunterladen</button>
            <h1 className="überschrift1">Vereinsanmeldung</h1>
            <div className="infotextasyl">Anmeldung in einem Verein in Deutschland ist in der Regel ein einfacher Prozess.</div>
            <p className="text">Hier sind die grundlegenden Schritte, die Sie befolgen sollten:</p>
            <p className="text">1. Suchen Sie sich den richtigen Verein aus: Recherchieren Sie nach Vereinen, die Ihren Interessen entsprechen und überprüfen Sie deren Ziele und Aktivitäten.</p>
            <p className="text">2. Kontaktieren Sie den Verein: Sie können den Verein telefonisch, per E-Mail oder über die sozialen Medien kontaktieren, um weitere Informationen über die Anmeldung zu erhalten.</p>
            <p className="text">3. Ausfüllen des Anmeldeformulars: Der Verein wird Ihnen ein Anmeldeformular zur Verfügung stellen, das Sie ausfüllen und zurücksenden müssen. Stellen Sie sicher, dass alle erforderlichen Informationen korrekt angegeben werden.</p>
            <p className="text">4. Bezahlen der Mitgliedsgebühren: Sobald der Verein Ihre Anmeldung bestätigt hat, müssen Sie die Mitgliedsgebühren bezahlen. Die Höhe der Gebühren variiert je nach Verein.</p>
            <p className="text">5. Willkommen im Verein: Sobald Sie alle Schritte abgeschlossen haben, werden Sie offiziell Mitglied des Vereins und können an seinen Aktivitäten teilnehmen.</p>
            <div className="infotextasyl">Hinweis: Einige Vereine haben spezielle Anforderungen, bevor man Mitglied werden kann, wie z.B. eine Probezeit oder eine Aufnahmeprüfung, deshalb ist es wichtig, sich vorher genau über die Anmeldungsbedingungen zu informieren.</div>



            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <div class="line"></div>
            <br />
        </div>
    );
}