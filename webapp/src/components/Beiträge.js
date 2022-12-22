import React from "react";
import formular from "./images/kindergeldantraghalb.png";
import arbeitserlaubnis from "./images/arbeitserlaubnis.svg";
import anerkennung from "/Users/katharinagrunwald/Projekt-Web-1/webapp/src/components/images/anerkennunngabschluesse.svg";
import asylbeantragen from "/Users/katharinagrunwald/Projekt-Web-1/webapp/src/components/images/asylbeantragen.svg";
import sportverein from "/Users/katharinagrunwald/Projekt-Web-1/webapp/src/components/images/sportverein.svg";
import wohnen from "/Users/katharinagrunwald/Projekt-Web-1/webapp/src/components/images/wohnen.svg";

export default function Button() {
    return (
        <div>
          <br className="abstand"/>
          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={formular} className="formular" alt="formular" /> Kindergeld <p className="beschreibung">Frage zu Absatz 3</p> </span></a>

          <a href="/arbeitserlaubnis"><span className="buttonbeitrag">
            <img src={arbeitserlaubnis} className="formular" alt="formular"/>Arbeitserlaubnis</span></a>

          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={anerkennung} className="formular" alt="formular"/>Anerkennung der Abschlüsse</span></a>

          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={asylbeantragen} className="formular" alt="formular"/>Asyl beantragen</span></a>

          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={sportverein} className="formular" alt="formular"/>Vereinsanmeldung</span></a>
          
          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={wohnen} className="formular" alt="formular"/>Beantragen Wohngeld</span></a>
        </div>
    );
}