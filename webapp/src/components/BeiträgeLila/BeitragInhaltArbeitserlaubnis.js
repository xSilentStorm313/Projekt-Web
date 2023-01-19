import React from "react";
import arbeitserlaubnis from "./BeiträgeBilderLila/arbeitserlaubnis.svg";
// import { MdAccountCircle } from "react-icons/md";
import infografik from "./BeiträgeBilderLila/grafik-fluechtlinge-begrifflichkeiten.jpeg";

//https://www.bmas.de/DE/Arbeit/Fachkraeftesicherung-und-Integration/Migration-und-Arbeit/Flucht-und-Aysl/arbeitsmarktzugang-fuer-fluechtlinge.html //quelle

export default function BeitragInhaltArbeitserlaubnis() {

    return (
        <div className="abstand2">
            <img src={arbeitserlaubnis} className="formular" alt="formular" />
            <button className="downloadbutton">Formulare herunterladen</button>
            <h1 className="überschrift1">Arbeitserlaubnis</h1>
            <p className="text">Bürgerinnen und Bürger aus EU-Mitgliedstaaten und sog. EFTA-Staaten dürfen in Deutschland gemäß des sogenannten Freizügigkeitsrechts ohne Einschränkung eine Beschäftigung aufnehmen. <br /> <br />
                Sie sind inländischen Arbeitnehmerinnen und Arbeitnehmern gleichgestellt. Der Zugang von ausländischen Fachkräften aus Drittstaaten zum deutschen Arbeitsmarkt setzt in den meisten Fällen eine Zustimmung der Bundesagentur für Arbeit (BA) voraus.</p>
            <div className="infotextasyl">Der Arbeitsmarktzugang von Schutzsuchenden bzw. Geflüchteten ist in den folgenden Fällen möglich, Voraussetzung ist jedoch grundsätzlich eine Arbeitserlaubnis.</div>
            <details>
                <summary className="zwischenüberschrift">1. Ein Arbeitsmarktzugang ist in folgenden Fällen grundsätzlich möglich</summary>
                <br />
                <details>
                    <summary className="zwischenüberschriftasyl">Asylbewerber haben einen Arbeitsmarktzugang</summary>
                    <br />
                    <li className="listearbeitserlaubnis">Nach drei Monaten: für Asylbewerber, die nicht verpflichtet sind, in einer Aufnahmeeinrichtung zu wohnen</li>
                    <br />
                    <li className="listearbeitserlaubnis">Nach sechs Monaten: für Asylbewerber mit minderjährigen Kindern</li>
                    <br />
                    <li className="listearbeitserlaubnis">Nach neun Monaten: für Asylbewerber ohne minderjährige Kinder (auch trotz Verpflichtung in Aufnahmeeinrichtung zu wohnen)</li>
                </details>
                <details>
                    <summary className="zwischenüberschriftasyl">Geduldete haben nach sechs Monaten einen Arbeitsmarktzugang, wenn sie zum Wohnen in der Aufnahmeeinrichtung verpflichtet sind, ansonsten nach drei Monaten</summary>
                </details>
                <details>
                    <summary className="zwischenüberschriftasyl">Kein Arbeitsmarktzugang besteht</summary>
                    <br />
                    <li className="listearbeitserlaubnis">In den ersten drei Monaten des Aufenthaltes</li>
                    <br />
                    <li className="listearbeitserlaubnis">Für die Zeit des Aufenthaltes in einer Erstaufnehmeeinrichtung <br /><br />(§§47 und 61 des Asylgesetzes)
                    <br /><br />(soweit die Fristen nach Nummern 1 und 2 nicht abgelaufen sind, oder für Asylbewerber deren Asylverfahren als offensichtlich unbegründet oder unzulässig abgelehnt wurde und keine aufschiebende Wirkung der Klage angeordnet wurde)</li>
                    <br />
                    <li className="listearbeitserlaubnis">für Geduldete, die das Abschiebungshindernis selbst zu vertreten oder ihre Mitwirkungspflichten bei der Beseitigung des Abschiebungshindernisses verletzt haben.</li>
                    <br />
                    <li className="listearbeitserlaubnis">für Ausländer aus einem sicheren Herkunftsstaat (Albanien, Bosnien und Herzegowina, Ghana, Kosovo, Nordmazedonien, Montenegro, Senegal und Serbien), die nach dem 31. August 2015 einen Asylantrag gestellt haben</li>
                    <br /> <br /> <br />
                    <img src={infografik} className="formular" alt="formular" />
                    <p className="text">Diese Grafik erklärt die konkreten Begrifflichkeiten nach der Einreise. Nach der Einreise gilt ein Ausländer, der um Asyl nachsucht, als Asylsuchender. Asylsuchende erhalten als Nachweis über ihre Registrierung in der Aufnahmeeinrichtung einen Ankunftsnachweis und damit eine Aufenthaltsgestattung. Wenn man einen Asylantrag beim BAMF (Bundesamt für Migration und Flüchtlinge) gestellt hat, ist man Asylbewerber, solange der Antrag geprüft wird. Nach der Prüfung des Antrages gibt es zwei verschiedene Möglichkeiten:</p>
                    <li className="listearbeitserlaubnis"> 1. Man erhält auf einen Asylantrag einen negativen Bescheid, erhält keinen Aufenthaltstitel und muss der Ausreisepflicht nachkommen. Wenn die Abschiebung (vollziehbare Ausreisepflicht) ausgesetzt wird, ist man Geduldeter.</li>
                    <br />
                    <li className="listearbeitserlaubnis">2. Man erhält auf einen Asylantrag einen positiven Bescheid und gilt als Asylberechtigter. Die Ausländerbehörde stellt dann eine Aufenthaltserlaubnis aus.</li>
                    <h2 className="zwischenüberschrift">Der Arbeitsmarktzugang nach Asylstatus</h2>
                    <p className="text">Asylbewerber sind Personen, die eine Anerkennung als politisch Verfolgte oder als Flüchtlinge beantragt haben, deren Verfahren also noch läuft. Geduldete sind Personen, deren Asylanträge abgelehnt wurden, die aber nicht abgeschoben werden können (z.B. Reiseunfähigkeit, eine fehlende Verkehrsverbindung in ein vom Krieg zerstörtes Land, fehlende Dokumente).</p>
                    <p className="text">Asylbewerber dürfen, solange sie verpflichtet sind, in einer Aufnahmeeinrichtung zu wohnen, keine Erwerbstätigkeit und damit auch keine Ausbildung aufnehmen. Sofern das Asylverfahren nach neun Monaten nach Asylantragsstellung noch nicht unanfechtbar abgeschlossen ist, ist dem Ausländer die Ausübung einer Beschäftigung zu erlauben. Ausgenommen sind Personen aus sicheren Herkunftsstaaten und Personen, deren Asylanträge als offensichtlich unbegründet oder unzulässig abgelehnt wurden (wenn Klage keine aufschiebende Wirkung hat). Asylbewerber mit minderjährigen Kindern haben nach sechs Monaten einen Arbeitsmarktzugang. Im Übrigen kann Asylbewerberinnen und Asylbewerber drei Monaten nach Asylantragstellung die Aufnahme einer Beschäftigung erlaubt werden (ausgenommen sind Asylbewerber aus sicheren Herkunftsstaaten mit Asylanträgen nach dem 31. August 2015). Wird der Asylantrag abgelehnt, aber eine Duldung erteilt, kann mit Erlaubnis der Ausländerbehörde nach sechs Monaten Aufenthalt eine Beschäftigung aufgenommen werden. Für Geduldete besteht ein gesetzliches Beschäftigungsverbot, z.B. wenn sie ihre Mitwirkungspflichten zur Ausreise (insbesondere Vorlage von Ausweisdokumenten) verletzt haben.</p>
                    <p className="text">Asylberechtigte und Kontingentflüchtlinge sind Personen, die als politisch Verfolgte anerkannt wurden. Sie haben einen unbeschränkten Zugang zum Arbeitsmarkt.</p>
                </details>
            </details>
            <details>
                <summary className="zwischenüberschrift">2. Arbeitserlaubnis für Asylbewerber und Geduldete</summary>
                <p className="text">Asylbewerber und Geduldete benötigen grundsätzlich eine Arbeitserlaubnis, die durch die örtliche Ausländerbehörde erteilt wird. Die Bundesagentur für Arbeit (BA) muss der Beschäftigung in der Regel zustimmen. Sie prüft die Beschäftigungsbedingungen, d.h. ob vergleichbare Arbeitsbedingungen mit Inländern vorliegen (z.B. beim Lohnniveau); diese Prüfung gilt auch für Zeitarbeitsfirmen.</p>
                <p className="text">Ausländerinnen und Ausländer können mit einer Duldung oder Aufenthaltsgestattung in Leiharbeitsverhältnissen beschäftigt werden. Ab dem 49. Monat ist keine Zustimmung der Bundesagentur für Arbeit (BA) mehr erforderlich; aber weiterhin die der Ausländerbehörde. Für bestimmte Beschäftigungen als Fachkräfte und bei Ausbildung gilt ein erleichterter Arbeitsmarktzugang ohne Zustimmung der BA.</p>
            </details>
            <br />
            <div className="infotextasyl">Weiter Informationen<br /> <a href="https://bamf-navi.bamf.de/de/Themen/Behoerden/">Zuständige Ausländerbehörden</a></div>
            <p className="quellen">Quellen</p>
            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <br />
        </div>
    );
}