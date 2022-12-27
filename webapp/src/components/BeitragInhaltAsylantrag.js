import React from "react";
import asylbeantragen from "./images/asylbeantragen.svg";
import { MdAccountCircle } from "react-icons/md";



export default function BeitragInhaltAsylantrag() {

    return (
        <div>
            <br className="abstand" />
            <img src={asylbeantragen} className="formular" alt="formular" />
            <h1 className="überschrift1">Asyl beantragen</h1>
            <p className="text">Sie sind in Deutschland, um Asyl zu beantragen.</p>
            <div className="infotextasyl">Grundsätzlich haben Sie das Recht auf ein Asylverfahren. Sie haben aber auch die Pflicht, während des gesamten Verfah­rens aktiv mitzuwirken und immer die Wahrheit zu sagen. Das ist wichtig für Sie, denn sonst gefährden Sie Ihr Asylverfahren.</div>
            <h2 className="zwischenüberschrift">1.Registrierung</h2>
            <p className="text">Bei Ihrer Ankunft in Deutschland werden Sie zunächst regis­triert.s
                Wir fragen Sie nach Ihrem Namen, Herkunftsland, Geburtsdatum, Ihrer Religion, Sprache und Volkszugehörig­keit. Wir fotografieren Sie und nehmen Ihre Fingerab- drücke ab. Nach der Registrierung erhalten Sie einen An­kunftsnachweis und stellen direkt im Ankunftszentrum Ihren Asylantrag.
                Es kann aber sein, dass Sie erst in einer Aufnahme­einrichtung untergebracht werden. Dort erhalten Sie Ihren Ankunftsnachweis und erfahren, wann Sie Ihren Asylantrag persönlich stellen können.
            </p>
            <a href="/arbeitserlaubnis"></a>
            <br/>
            <p className="komment">Was ist wenn ich meinen Geburtsurkunde verloren habe? Ist das schlimm? Kann ich die irgendwo neu beantragen?
            <br/>
            <MdAccountCircle size={30} className="Profilbild antwort"/>
            <button className="buttonantworten">Antworten</button></p>
            <p className="antwortkomment">Was ist wenn ich meinen Geburts- urkunde verloren habe? Ist das schlimm?Kann ich die irgendwo neu beantragen?
            <br/>
            <MdAccountCircle size={30} className="Profilbild antwort"/>
            <button className="buttonantworten">Antworten</button></p>
            <p className="komment">Was ist wenn ich den Termin für die Anhörung verpasse?
            <br/>
            <MdAccountCircle size={30} className="Profilbild antwort"/>
            <button className="buttonantworten">Antworten</button></p>
        </div>
    );
}