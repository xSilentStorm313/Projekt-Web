import React from "react";
import formular from "./BeiträgeBilderLila/kindergeldantraghalb.png";
import arbeitserlaubnis from "./BeiträgeBilderLila/arbeitserlaubnis.svg";
import anerkennung from "./BeiträgeBilderLila/anerkennunngabschluesse.svg";
import asylbeantragen from "./BeiträgeBilderLila/asylbeantragen.svg";
import sportverein from "./BeiträgeBilderLila/sportverein.svg";
import wohnen from "./BeiträgeBilderLila/wohnen.svg";
import rückkehr from "./BeiträgeBilderLila/Rückkehr.png";
import verkehr from "./BeiträgeBilderLila/verkehr.png";
import icon3 from "../images/lupe.svg";



export default function Button() {
  return (
    <div className="abstand">
      <button className="buttonerfahrungsbereich"><div class="container-inner">
        <span className="schrift-erfahrungsbereich">Suche</span>
        <div className="erfahrungsbereich-pfeil"><img src={icon3} className="lupeicon" alt="icon" align="left" /></div>
      </div>
      </button>

      <a href="/arbeitserlaubnis"><span className="buttonbeitrag">
        <img src={arbeitserlaubnis} className="formular" alt="formular" /><span className="überschriften-hauptseite">Arbeitserlaubnis</span><span className="beschreibung"> <br />In diesem Artikel erfährst du,
          wie du als EU und non-EU Bürger in Deutschland arbeiten kannst</span> </span></a>

      <a href="/anerkennungabschluesse"><span className="buttonbeitrag">
        <img src={anerkennung} className="formular" alt="formular" /><span className="überschriften-hauptseite">Abschluss Anerkennung</span><span className="beschreibung"> <br />Hier wird dir gezeigt, wie du welche Abschlüsse anerkennen lassen kannst</span></span></a>

      <a href="/asylantrag"><span className="buttonbeitrag">
        <img src={asylbeantragen} className="formular" alt="formular" /><span className="überschriften-hauptseite">Asyl Beantragung</span>
        <span className="beschreibung-asyl-verein"> <br />Hier erhälst du Hilfe für dein Asylverfahren</span> </span> </a>

      <a href="/vereinsanmeldung"><span className="buttonbeitrag">
        <img src={sportverein} className="formular" alt="formular" /><span className="überschriften-hauptseite">Vereinsanmeldung</span><span className="beschreibung-asyl-verein"> <br />Hier findest Sport und Freizeitangebote</span></span></a>

      <a href="/wohngeld"><span className="buttonbeitrag">
        <img src={wohnen} className="formular" alt="formular" /><span className="überschriften-hauptseite">Wohngeld Beantragung</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema Wohnen</span></span></a>

      <a href="/kindergeld"><span className="buttonbeitrag">
        <img src={formular} className="formular-kindergeld" alt="formular" /> <br /> <br /><span className="überschriften-hauptseite">Kindergeld</span><span className="beschreibung-kindergeld"> <br />Ich hätte eine Frage zu Absatz 3, woher kriege ich folgende Informationen?</span> </span></a>

      <a href="/rückkehrlila"><span className="buttonbeitrag">
        <img src={rückkehr} className="formular" alt="formular" /><span className="überschriften-hauptseite">Freiwillige Rückkehr</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema freiwillige Rückkehr als Geflüchteter</span></span></a>

      <a href="/verkehrlila"><span className="buttonbeitrag-verkehr">
        <img src={verkehr} className="formular" alt="formular" /><span className="überschriften-hauptseite">Verkehr</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema kostenfreier Verkehr für ukrainische Geflüchtete</span></span></a>
    </div>
  );
}