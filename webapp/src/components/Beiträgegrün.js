import React from "react";
import rückkehr from "./images/Arikelbilder/Rückkehr.png";
import verkehr from "./images/Arikelbilder/verkehr.png";

export default function Button() {
  return (
    <div className="abstand">
 
      <a href="/verkehr"><span className="buttonbeitraggrün">
        <img src={verkehr} className="formular" alt="formular" />Verkehr <span className="beschreibung"> <br />Hier findest du Informationen zum Thema kostenfeier Verkehr mit den Verkehrs- mitteln für ukrainische Geflüchtete</span></span></a>
      
        <a href="/rückkehr"><span className="buttonbeitraggrün">
        <img src={rückkehr} className="formular" alt="formular" />freiwillige Rückkehr <span className="beschreibung"> <br />Hier findest du Informationen zum Thema freiwillige Rückkehr als Geflüchteter in das Ursprungsland</span></span></a>

    </div>
  );
}