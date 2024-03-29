import React from "react";
import formular from "./BeiträgeBilderLila/kindergeldantraghalb.png";
import arbeitserlaubnis from "./BeiträgeBilderLila/arbeitserlaubnis.svg";
import anerkennung from "./BeiträgeBilderLila/anerkennunngabschluesse.svg";
import asylbeantragen from "./BeiträgeBilderLila/asylbeantragen.svg";
import sportverein from "./BeiträgeBilderLila/sportverein.svg";
import wohnen from "./BeiträgeBilderLila/wohnen.svg";
import rückkehr from "./BeiträgeBilderLila/Rückkehr.png";
import verkehr from "./BeiträgeBilderLila/verkehr.png";
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom";


export default function Button() {
  return (
    <div className="abstand">
      <button className="buttonsuche"><div className="container-inner">
        <span className="schrift-suche">Suche</span>
        <div className="erfahrungsbereich-lupe"><AiOutlineSearch size={20} /></div>
      </div>
      </button>
      
      <Link to="/arbeitserlaubnis"><span className="buttonbeitrag">
        <img src={arbeitserlaubnis} className="formular" alt="formular" /><span className="überschriften-hauptseite">Arbeitserlaubnis</span><span className="beschreibung"> <br />In diesem Artikel erfährst du,
          wie du als EU und non-EU Bürger in Deutschland arbeiten kannst</span> </span></Link>

  
      <Link to="/anerkennungabschluesse"><span className="buttonbeitrag">
        <img src={anerkennung} className="formular" alt="formular" /><span className="überschriften-hauptseite">Abschluss Anerkennung</span><span className="beschreibung"> <br />Hier wird dir gezeigt, wie du welche Abschlüsse anerkennen lassen kannst</span></span>
        </Link>
      
        <Link to="/asylantrag">
      <span className="buttonbeitrag">
        <img src={asylbeantragen} className="formular" alt="formular" /><span className="überschriften-hauptseite">Asyl Beantragung</span>
        <span className="beschreibung-asyl-verein"> <br />Hier erhälst du Hilfe für dein Asylverfahren</span> </span>
        </Link>


        <Link to="/vereinsanmeldung">
      <span className="buttonbeitrag">
        <img src={sportverein} className="formular" alt="formular" /><span className="überschriften-hauptseite">Vereinsanmeldung</span><span className="beschreibung-asyl-verein"> <br />Hier findest Sport und Freizeitangebote</span></span>
        </Link>

        <Link to="/wohngeld">
      <span className="buttonbeitrag">
        <img src={wohnen} className="formular" alt="formular" /><span className="überschriften-hauptseite">Wohngeld Beantragung</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema Wohnen</span></span>
        </Link>

        <Link to="/kindergeld">
      <span className="buttonbeitrag">
        <img src={formular} className="formular-kindergeld" alt="formular" /> <br /> <br /><span className="überschriften-hauptseite">Kindergeld</span><span className="beschreibung-kindergeld"> <br />Ich hätte eine Frage zu Absatz 3, woher kriege ich folgende Informationen?</span> </span>
        </Link>

        <Link to="/rückkehrlila">
      <span className="buttonbeitrag">
        <img src={rückkehr} className="formular" alt="formular" /><span className="überschriften-hauptseite">Freiwillige Rückkehr</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema freiwillige Rückkehr als Geflüchteter</span></span>
        </Link>

        <Link to="/verkehrlila">
      <span className="buttonbeitrag-verkehr">
        <img src={verkehr} className="formular" alt="formular" /><span className="überschriften-hauptseite">Verkehr</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema kostenfreier Verkehr für ukrainische Geflüchtete</span></span>
        </Link>
    </div>
  );
}