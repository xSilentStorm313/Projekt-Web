import React from "react";
import rückkehr from "./BilderbeiträgeGrün/Rückkehr.png";
import verkehr from "./BilderbeiträgeGrün/verkehr.png";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Beiträgegrün() {
  return (
    <div className="abstand">
      <button className="buttonerfahrungsbereich">
      <div class="container-inner">
        <span className="schrift-erfahrungsbereich">Erfahrungsbereich</span>
        <div className="erfahrungsbereich-pfeil"><AiOutlineRight size={20} /></div>
      </div>
      </button>

      <Link to="/verkehr">
      <span className="buttonbeitraggrün">
        <img src={verkehr} className="formular" alt="formular" /><span className="überschriften-hauptseite">Verkehr</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema freiwillige Rückkehr als Geflüchteter</span></span>
      </Link>

      <Link to="/rückkehr">
      <span className="buttonbeitraggrün-rückkehr">
        <img src={rückkehr} className="formular" alt="formular" /><span className="überschriften-hauptseite">Freiwillige Rückkehr</span><span className="beschreibung"> <br />Hier findest du Informationen zum Thema kostenfreier Verkehr für ukrainische Geflüchtete</span></span>
        </Link>

    </div>
  );
}