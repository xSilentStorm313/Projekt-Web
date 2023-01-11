import React from "react";
import icon1 from "./images/rundumdieuhr.svg" // anderer Speicherort
import icon2 from "./images/information.svg" // anderer Speicherort
import icon3 from "./images/suchen.svg" // anderer Speicherort
import icon4 from "./images/formulare.svg" // anderer Speicherort
import icon5 from "./images/interagieren.svg" // anderer Speicherort

export default function InfoText() {
    return (
        <div>
            <h4>Das kann dir Helping Hands alles bieten:</h4>
            <p><img src={icon1} className="icon" alt="icon" align="left" /><p className="texthome"> Kostenlose Hilfe für bürokratische Angelegenheiten rund um die Uhr</p></p>
            <p><img src={icon2} className="icon" alt="icon" align="left" /><p className="texthome"> Informationen zu neuen Gesetzen und Nachrichten mit Relevanz für Ge- &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;füchtete</p></p>
            <p><img src={icon3} className="icon" alt="icon" align="left" /><p className="texthome"> Richtige Behördenwege finden</p></p>
            <p><img src={icon4} className="icon" alt="icon" align="left" /><p className="texthome"> Formulare verstehen</p></p>
            <p><img src={icon5} className="icon" alt="icon" align="left" /><p className="texthome"> Mit anderen Personen interagieren & sich gegenseitig weiterhelfen</p></p>
        </div>
    )
}
