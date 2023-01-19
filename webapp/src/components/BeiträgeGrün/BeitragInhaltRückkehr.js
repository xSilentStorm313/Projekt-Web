import React from "react";
import rückkehr from "./BilderbeiträgeGrün/Rückkehr.png";
//import { MdAccountCircle } from "react-icons/md";

// https://www.bamf.de/DE/Themen/Rueckkehr/FoerderprogrammREAGGARP/reaggarp-node.html

export default function BeitragInhaltRückkehr() {

    return (
        <div className="abstand2">
            <img src={rückkehr} className="formular" alt="formular" />
            <button className="downloadbuttongrün">Download Formulare</button>
            <h1 className="überschrift1">Freiwillige Rückkehr</h1>
            <div className="infotextasylgrün">Bund und Länder unterstützen mit dem humanitären Förderprogramm REAG/GARP (Reintegration and Emigration Programme for Asylum-Seekers in Germany/Government Assisted Repatriation Programme) Personen bei der freiwilligen Rückkehr in das Herkunftsland oder bei der Weiterwanderung in einen aufnahmebereiten Staat.</div>
            <p className="textgrün">
                Die Internationale Organisation für Migration (IOM) organisiert und betreut über beide Förderprogramme die Ausreise. Bund und Länder legen jährlich gemeinsam den Umfang der Ausreisehilfen fest. Die aktuell gültigen Förderleistungen sind im REAG/GARP-Informationsblatt aufgeführt. Das Informationsblatt ist in mehreren Sprachen auf dem Onlineportal "Returning from Germany" verfügbar (siehe Links im Tab unten). </p>
            <details>
                <summary className="zwischenüberschriftgrün">Freiwillige Ausreisen nach Syrien, Jemen, Libyen, Eritrea und Afghanistan
                </summary>
                <p className="textgrünaufklappbar">Freiwillige Ausreisen nach Syrien sowie nach Jemen, Libyen (Eritrea)* und Afghanistan werden aktuell nicht über das REAG/GARP-Programm (IOM) abgewickelt. Für Rückkehrende in diese Herkunftsländer besteht jedoch gegebenenfalls die Möglichkeit, die Ausreise von einer antragsübermittelnden Stelle (z. B. Ausländerbehörde oder Rückkehrberatungsstelle) organisieren und fördern zu lassen. Das Bundesamt beteiligt sich im Rahmen einer Refinanzierung - in Anlehnung an die Förderleistungen des REAG/GARP-Programms - anteilig an den Kosten der freiwilligen Ausreise sofern diese durch die Bundesländer gefördert wird. Nach erfolgter Ausreise kann die antragsübermittelnde Stelle einen Antrag auf Refinanzierung beim Bundesamt für Migration und Flüchtlinge einreichen.</p>
                <br /> <br />
                <div className="infotextasylgrün">Bitte wenden Sie sich für weitere Informationen an eine Rückkehrberatungsstelle in Ihrer Nähe unter:
                    <a href="https://www.returningfromgermany.de/de/centres/">www.ReturningfromGermany.de</a></div><br />
                <p className="textgrünaufklappbar">Diese kann Sie ggf. über weitere bestehende Unterstützungsmöglichkeiten durch die einzelnen Bundesländer informieren. Bitte beachten Sie, dass eine Antragstellung nur über eine antragsübermittelnde Stelle möglich ist.
                    Weitere Informationen sind im Downloadbereich verfügbar.<br />
                    Diese Entscheidung steht unter dem Vorbehalt kurzfristiger Änderungen Seitens des Bundes und der Bundesländer.
                </p>

            </details>
            <details>
                <summary className="zwischenüberschriftgrün">Nicht-ukrainische Drittstaatsangehörige aus der Ukraine
                </summary>
                <p className="textgrünaufklappbar">Auf Beschluss des BMI/BAMF und der Bundesländer sind mit sofortiger Wirkung alle (nicht-ukrainischen) Drittstaatsangehörigen aus der Ukraine, die die Ukraine im Zuge des Krieges verlassen haben und seit dem 24.02.2022 nach Deutschland eingereist und behördlich erfasst sind, bis auf Weiteres vollumfänglich für REAG/GARP und ggf. StarthilfePlus förderfähig.</p>
                <p className="textgrünaufklappbar">Diese Entscheidung steht unter dem Vorbehalt kurzfristiger Änderungen Seitens des Bundes und der Bundesländer.</p>
            </details>
            <h2 className="zwischenüberschriftgrün">Anspruch</h2>
            <p className="textgrün">Grundsätzlich können mittellose Drittstaatsangehörige REAG/GARP-Förderleistungen in Anspruch nehmen, die sich im Bundesgebiet aufhalten und in ihr Herkunftsland zurückkehren möchten. Ein Rechtsanspruch auf Förderung besteht nicht! Kosten für die Vorbereitung einer Ausreise (z.B. Gebühren für Pässe/Visa, Fahrten zur Konsularvertretung) sind beim Kostenträger (z. B. Sozialamt) zu beantragen.</p>
            <h2 className="zwischenüberschriftgrün">Ausreise</h2>
            <p className="textgrün">Für eine Ausreise sind gültige Reisedokumente und ggf. Einreisevisa für das Zielland notwendig. IOM bearbeitet nur Anträge mit gültigen Reisedokumenten und erforderlichen Visa! Über die aktuellen Einreisebestimmungen informiert das Auswärtige Amt (siehe Links im Tab unten). Die Grenzübertrittsbescheinigung ist der Nachweis der tatsächlichen Ausreise. Das Dokument sollte bei den Grenzbehörden oder deutschen Konsularvertretungen im Zielland abgegeben werden.<br /> <br />

                Für die Ausreise und Leistungsgewährung ist ein Antrag notwendig. Die Antragstellung erfolgt bei einer Rückkehrberatungsstelle. Beratungsstellen helfen auch bei der Vorbereitung einer Rückkehr. Rückkehrberatungsstellen leisten umfangreiche Beratung bei der Vorbereitung und Organisation für eine Ausreise/Rückkehr. Das Informationsportal "Returning from Germany" bietet eine Suchfunktion nach einer Rückkehrberatungsstelle in der Nähe.
                Eine REAG/GARP-Förderung erfolgt nur auf Antrag.</p>


            <p className="quellen">Quellen</p>
            <p className="beitrag-kommentar-überschrift">Kommentare</p>
        </div>
    );
}