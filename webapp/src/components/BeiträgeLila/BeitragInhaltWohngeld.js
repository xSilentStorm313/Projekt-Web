import React from "react";
import wohnen from "./BeiträgeBilderLila/wohnen.svg";
//import { MdAccountCircle } from "react-icons/md";

//https://www.stmb.bayern.de/wohnen/wohngeld/index.php

export default function BeitragInhaltWohngeld() {

    return (
        <div className="abstand2">
            <img src={wohnen} className="formular" alt="formular" />
            <button className="downloadbutton">Download Formulare</button>
            <h1 className="überschrift1">Beantragen Wohngeld</h1>
            <p className="text">Der Staat leistet einkommensschwachen Bürgern bei ihren Wohnkosten eine finanzielle Hilfe. <br /> <br />Dieses Wohngeld wird als Zuschuss gezahlt. Einen Mietzuschuss erhalten auf Antrag beispielsweise Mieter einer Wohnung, Untermieter oder Heimbewohner. <br /> <br />Eigentümer eines Eigenheimes, einer Eigentumswohnung oder einer landwirtschaftlichen Nebenerwerbsstelle können Wohngeld als Lastenzuschuss für den selbstgenutzten Wohnraum beantragen.</p>
            <h2 className="zwischenüberschrift">Voraussetzungen</h2>
            <p className="text">Ob ein Anspruch auf Wohngeld besteht und wenn ja, in welcher Höhe, hängt von drei Faktoren ab: von der Anzahl der Haushaltsmitglieder, von der Höhe des Gesamteinkommens und von der Höhe der Miete beziehungsweise Belastung.</p>
            <p className="text">Zu den Haushaltsmitgliedern, die berücksichtigt werden, können neben der wohngeldberechtigten Person beispielsweise Ehegatten, Lebenspartner, Kinder, Eltern oder Geschwister zählen. Empfänger von Arbeitslosengeld II, von Grundsicherung im Alter und bei Erwerbsminderung oder von Sozialhilfe erhalten kein Wohngeld, wenn die Kosten der Unterkunft bereits bei der Berechnung dieser Leistung eingeflossen sind.</p>
            <h2 className="zwischenüberschrift">Antrag und Nachweise</h2>
            <p className="text">Das Wohngeld wird nur auf Antrag geleistet.</p>
            <div className="infotextasyl">Der Antrag ist bei der zuständigen Wohngeldbehörde einzureichen, d. h. bei dem Landratsamt beziehungsweise der kreisfreien Stadt, in deren Gebiet der Wohnraum liegt.</div>
            <p className="text">Dort erhalten Sie auch die Antragsformulare sowie nähere Auskünfte. Antragsformulare zum Ausdrucken sind auch auf dieser Seite eingestellt.</p>
            <p className="text">Der Antrag ist mit den erforderlichen Nachweisen einzureichen. Zu diesen Nachweisen gehören unter anderem die Bescheinigungen über das Jahreseinkommen, über die Rente, über die Miete oder die Belastungen. Zu den Belastungen gehören bestimmte Ausgaben für Tilgung und Zinsen sowie für Instandhaltungs- oder Verwaltungskosten. Die Nachweise können auch nachgereicht werden.</p>
            <p className="text">Die Kontaktdaten des für Ihren Antrag zuständigen Landratsamtes oder der kreisfreien Stadt können Sie über die Ortsauswahl im BayernPortal herausfinden. Geben Sie hierzu in der Ortauswahl unter „Vor Ort“ den Ort ein, in dem der Wohnraum liegt, für den Sie Wohngeld beantragen möchten.</p>
            <h2 className="zwischenüberschrift">Online-Wohngeldantrag auf Mietzuschuss</h2>
            <p className="text">Viele Wohngeldbehörden bieten für den Antrag auf Mietzuschuss bereits ein Online-Verfahren an. Auf der Internetseite Ihrer kreisfreien Stadt beziehungsweise Ihres Landkreises oder im BayernPortal können Sie sehen, ob der Online-Antrag von Ihrer Wohngeldbehörde bereits angeboten wird.</p>
            <h2 className="zwischenüberschrift">Bewilligung</h2>
            <p className="text">Über den Antrag entscheidet das zuständige Landratsamt oder die kreisfreie Stadt ("Wohngeldbehörde") mit einem schriftlichen Bescheid. Bei der Wohngeldbehörde werden auch nähere Auskünfte erteilt und Fragen beantwortet. Bewilligt wird das Wohngeld in der Regel für zwölf Monate. Danach ist ein neuer Antrag erforderlich.</p>


            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <div class="line"></div>
            <br />
        </div>
    );
}