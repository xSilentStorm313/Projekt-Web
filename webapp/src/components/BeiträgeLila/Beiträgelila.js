import React from "react";
import formular from "./BeiträgeBilderLila/kindergeldantraghalb.png";
import arbeitserlaubnis from "./BeiträgeBilderLila/arbeitserlaubnis.svg";
import anerkennung from "./BeiträgeBilderLila/anerkennunngabschluesse.svg";
import asylbeantragen from "./BeiträgeBilderLila/asylbeantragen.svg";
import sportverein from "./BeiträgeBilderLila/sportverein.svg";
import wohnen from "./BeiträgeBilderLila/wohnen.svg";

export default function Button() {
  return (
    <div className="abstand">

      <a href="/arbeitserlaubnis"><span className="buttonbeitrag">
        <img src={arbeitserlaubnis} className="formular" alt="formular"/>Arbeitserlaubnis <span className="beschreibung"> <br />In diesem Artikel erfährst du,
          wie du als EU und non-EU Bürger in Deutschland arbeiten kannst</span> </span></a>
 
      <a href="/anerkennungabschluesse"><span className="buttonbeitrag">
        <img src={anerkennung} className="formular" alt="formular" />Anerkennung der Abschlüsse<span className="beschreibung"> <br />Hier wird dir gezeigt, wie du welche Abschlüsse anerkennen lassen kannst</span></span></a>

      <a href="/asylantrag"><span className="buttonbeitrag">
        <img src={asylbeantragen} className="formular" alt="formular" />Asyl beantragen
        <span className="beschreibung"> <br />Hier erhälst du Hilfe für dein Asylverfahren</span> </span> </a>

      <a href="/vereinsanmeldung"><span className="buttonbeitrag">
        <img src={sportverein} className="formular" alt="formular" />Vereinsanmeldung<span className="beschreibung"> <br />Hier findest Sport und Freizeitangebote</span></span></a>

      <a href="/wohngeld"><span className="buttonbeitrag">
        <img src={wohnen} className="formular" alt="formular" />Beantragen Wohngeld <span className="beschreibung"> <br />Hier findest Informationen zum Thema Wohnen wie zum Beispiel zur Wohnungsanmeldung</span></span></a>
      
        <a href="/kindergeld"><span className="buttonbeitrag">
        <img src={formular} className="formular" alt="formular"/> <br /> <br />Kindergeld  <span className="beschreibung"> <br />Ich hätte eine Frage zu Absatz 3, woher kriege ich folgende Informationen?</span> </span></a>
    </div>
  );
}