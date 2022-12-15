import React from "react";
import icon1 from  "./images/user-clock.svg" // anderer Speicherort
import icon2 from  "./images/info.svg" // anderer Speicherort
import icon3 from  "./images/magnifying-glass.svg" // anderer Speicherort
import icon4 from  "./images/clipboard-question.svg" // anderer Speicherort
import icon5 from  "./images/hands.svg" // anderer Speicherort

export default function InfoText() {
    return (
        <div>
            <p><img src={icon1} className="icon" alt="icon" align="left" width="35" height="35" /><p>Kostenlose Hilfe für bürokratische Angelegenheiten rund um die Uhr</p></p>
            <p><img src={icon2} className="icon" alt="icon" align="left" width="35" height="35" /><p>Informationen zu neuen Gesetzen und Nachrichten mit Relevanz für Geflüchtete</p></p>
            <p><img src={icon3} className="icon" alt="icon" align="left" width="35" height="35" /><p>Richtige Behördenwege finden</p></p>
            <p><img src={icon4} className="icon" alt="icon" align="left" width="35" height="35" /><p>Formulare verstehen</p></p>
            <p><img src={icon5} className="icon" alt="icon" align="left" width="35" height="35" /><p>Mit anderen Personen interagieren & sich gegenseitig weiterhelfen</p></p>
      </div>
    ) }
