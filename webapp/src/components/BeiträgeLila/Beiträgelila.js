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
        <img src={arbeitserlaubnis} className="formular" alt="formular"/><span className="überschriften-hauptseite">Arbeitserlaubnis</span><span className="beschreibung"> <br />In diesem Artikel erfährst du,
          wie du als EU und non-EU Bürger in Deutschland arbeiten kannst</span> </span></a>
 
      <a href="/anerkennungabschluesse"><span className="buttonbeitrag">
        <img src={anerkennung} className="formular" alt="formular" /><span className="überschriften-hauptseite">Abschluss Anerkennung</span><span className="beschreibung"> <br />Hier wird dir gezeigt, wie du welche Abschlüsse anerkennen lassen kannst</span></span></a>

      <a href="/asylantrag"><span className="buttonbeitrag">
        <img src={asylbeantragen} className="formular" alt="formular" /><span className="überschriften-hauptseite">Asyl beantragen</span>
        <span className="beschreibung-asyl-verein"> <br />Hier erhälst du Hilfe für dein Asylverfahren</span> </span> </a>

      <a href="/vereinsanmeldung"><span className="buttonbeitrag">
        <img src={sportverein} className="formular" alt="formular" /><span className="überschriften-hauptseite">Vereinsanmeldung</span><span className="beschreibung-asyl-verein"> <br />Hier findest Sport und Freizeitangebote</span></span></a>

      <a href="/wohngeld"><span className="buttonbeitrag">
        <img src={wohnen} className="formular" alt="formular" /><span className="überschriften-hauptseite">Beantragen Wohngeld</span><span className="beschreibung"> <br />Hier findest Informationen zum Thema Wohnen wie zum Beispiel zur Wohnungsanmeldung</span></span></a>
      
        <a href="/kindergeld"><span className="buttonbeitrag-kindergeld">
        <img src={formular} className="formular-kindergeld" alt="formular"/> <br /> <br /><span className="überschriften-hauptseite">Kindergeld</span><span className="beschreibung-kindergeld"> <br />Ich hätte eine Frage zu Absatz 3, woher kriege ich folgende Informationen?</span> </span></a>
    </div>
  );
}