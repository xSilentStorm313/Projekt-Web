import React from "react";
import formular from "./images/kindergeldantraghalb.png";
import arbeitserlaubnis from "./images/arbeitserlaubnis.svg"

export default function Button() {
    return (
        <div>
          <br className="abstand"/>
          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={formular} className="formular" alt="formular" /> Kindergeld <p className="beschreibung">Frage zu Absatz 3</p> </span></a>
          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={arbeitserlaubnis} className="formular" alt="formular"/> Arbeitserlaubnis</span></a>
          <a href="/beitrag"><span className="buttonbeitrag">drei</span></a>
          <a href="/beitrag"><span className="buttonbeitrag">vier</span></a>
          
        </div>
    );
}