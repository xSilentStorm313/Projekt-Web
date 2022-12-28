import React from "react";
import formular from "./images/kindergeldantraghalb.png";
import arbeitserlaubnis from "./images/arbeitserlaubnis.svg";
import anerkennung from "./images/anerkennunngabschluesse.svg";
import asylbeantragen from "./images/asylbeantragen.svg";
import sportverein from "./images/sportverein.svg";
import wohnen from "./images/wohnen.svg";

export default function Button() {
  return (
    <div>
      <br className="abstand" />

      <a href="/arbeitserlaubnis"><span className="buttonbeitrag">
        <img src={arbeitserlaubnis} className="formular" alt="formular"/>Arbeitserlaubnis <span className="beschreibung"> <br />In diesem Artikel erfährst du,
          wie du als EU und non-EU Bürger in Deutschland arbeiten kannst</span> </span></a>
 
      <a href="/beitrag"><span className="buttonbeitrag">
        <img src={anerkennung} className="formular" alt="formular" />Anerkennung der Abschlüsse<span className="beschreibung"> <br />Hier wird dir gezeigt, wie du welche Abschlüsse anerkennen lassen kannst</span></span></a>

      <a href="/asylantrag"><span className="buttonbeitrag">
        <img src={asylbeantragen} className="formular" alt="formular" />Asyl beantragen
        <span className="beschreibung"> <br />Hier erhälst du Hilfe für dein Asylverfahren</span> </span> </a>

      <a href="/beitrag"><span className="buttonbeitrag">
        <img src={sportverein} className="formular" alt="formular" />Vereinsanmeldung<span className="beschreibung"> <br />Hier findest Sport und Freizeitangebote</span></span></a>

      <a href="/beitrag"><span className="buttonbeitrag">
        <img src={wohnen} className="formular" alt="formular" />Beantragen Wohngeld <span className="beschreibung"> <br />Hier findest Informationen zum Thema Wohnen wie zum Beispiel zur Wohnungsanmeldung</span></span></a>
      
        <a href="/beitrag"><span className="buttonbeitrag">
        <img src={formular} className="formular" alt="formular"/> Kindergeld  <span className="beschreibung"> <br />Frage zu Absatz 3</span> </span></a>
    </div>
  );
}