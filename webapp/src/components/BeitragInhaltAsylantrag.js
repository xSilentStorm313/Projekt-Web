import React from "react";
import asylbeantragen from "./images/asylbeantragen.svg";


export default function BeitragInhaltAsylantrag() {

    return (
        <div>
            <br className="abstand" />
            <img src={asylbeantragen} className="formular" alt="formular" />
            <h1 className="überschrift1">Asyl beantragen</h1>
            <p className="text">Sie sind in Deutschland, um Asyl zu beantragen.</p>
            <span className="infotextasyl">Grundsätzlich haben Sie das Recht auf ein Asylverfahren. Sie haben aber auch die Pflicht, während des gesamten Verfah­rens aktiv mitzuwirken und immer die Wahrheit zu sagen. Das ist wichtig für Sie, denn sonst gefährden Sie Ihr Asylverfahren.</span>
            <h2 className="zwischenüberschrift">1.Regestrierung</h2>
            <p className="text">Bei Ihrer Ankunft in Deutschland werden Sie zunächst regis­triert.
                Wir fragen Sie nach Ihrem Namen, Herkunftsland, Geburtsdatum, Ihrer Religion, Sprache und Volkszugehörig­keit. Wir fotografieren Sie und nehmen Ihre Fingerabdrücke ab. Nach der Registrierung erhalten Sie einen An­kunftsnachweis und stellen direkt im Ankunftszentrum Ihren Asylantrag.
                Es kann aber sein, dass Sie erst in einer Aufnahme­einrichtung untergebracht werden. Dort erhalten Sie Ihren Ankunftsnachweis und erfahren, wann Sie Ihren Asylantrag persönlich stellen können.
            </p>
            <a href="/arbeitserlaubnis"></a>
        </div>
    );
}