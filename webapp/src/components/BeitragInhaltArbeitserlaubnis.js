import React from "react";
import arbeitserlaubnis from "./images/arbeitserlaubnis.svg";
import { MdAccountCircle } from "react-icons/md";

//https://www.bmas.de/DE/Arbeit/Fachkraeftesicherung-und-Integration/Migration-und-Arbeit/Flucht-und-Aysl/arbeitsmarktzugang-fuer-fluechtlinge.html //quelle

export default function BeitragInhaltArbeitserlaubnis() {

    return (
        <div>
            <br className="abstand" />
            <img src={arbeitserlaubnis} className="formular" alt="formular" />
            <h1 className="überschrift1">Arbeitserlaubnis</h1>
            <p className="text">Bürgerinnen und Bürger aus EU-Mitglied- staaten und sog. EFTA-Staaten dürfen in Deutschland gemäß dem sogenannten Frei- zügigkeitsrecht ohne Einschränkung eine Beschäftigung aufnehmen. <br /> <br />
                Sie sind inländischen Arbeitnehmerinnen und Arbeitnehmern gleichgestellt. Der Zugang von ausländischen Fachkräften aus Dritt- staaten zum deutschen Arbeitsmarkt setzt in den meisten Fällen eine Zustimmung der Bundesagentur für Arbeit (BA) voraus.</p>
            <div className="infotextasyl">Der Arbeitsmarktzugang von Schutzsuchenden bzw. Geflüchteten ist in den folgenden Fällen möglich, Vorausstzung ist jedoch grundsätzlich eine Arbeitserlaubnis</div>
            <details>
                <summary className="zwischenüberschrift">1. Ein Arbeitsmarktzugang ist in folgenden Fällen grundsätzlich möglich</summary>
                <br />
                <details>
                    <summary className="zwischenüberschriftasyl">Asylbewerber haben einen Arbeits- &ensp; &nbsp; &nbsp;marktzugang</summary>
                    <br />
                    <li className="listearbeitserlaubnis">Nach drei Monaten für Asylbewerber, die nicht verpflichtet sind, in einer Aufnahmeeinrichtung zu wohnen</li>
                    <br />
                    <li className="listearbeitserlaubnis">Nach sechs Monaten Asylbewerber mit minderjährigen Kindern</li>
                    <br />
                    <li className="listearbeitserlaubnis">Nach neun Monaten Asylbewerber ohne minderjährige Kinder (auchtrotz Verpflichtung in Aufnahmeeinrichtung zu wohnen)</li>
                </details>
                <details>
                    <summary className="zwischenüberschriftasyl">Gedulete haben nach sechs Monaten &nbsp; &nbsp;einen Arbeitsmarktzugang, wenn sie &nbsp; &nbsp; &nbsp;zum Wohnen in der Aufnahmeein- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;richtung verpflichtet sind, ansonsten &nbsp; &nbsp;&nbsp;&nbsp; nach drei Monaten</summary>
                </details>
                <details>
                    <summary className="zwischenüberschriftasyl">Kein Arbeitsmarktzugang besteht</summary>
                    <br />
                    <li className="listearbeitserlaubnis">in den ersten drei Monaten des Aufent- haltes</li>
                    <br />
                    <li className="listearbeitserlaubnis">für die Zeit des Aufenthaltes in einer Erst- aufnehmeeinrichtung <br />(§§47 und 61 des Asylgesetzes)</li>
                </details>
            </details>




            <br />
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