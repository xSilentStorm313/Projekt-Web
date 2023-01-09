import React from "react";
import rückkehr from "./images/Rückkehr.png";
import verkehr from "./images/verkehr.png";

export default function Button() {
  return (
    <div className="abstand">
 
      <a href="/verkehr"><span className="buttonbeitraggrün">
        <img src={verkehr} className="formular" alt="formular" />freiwillige Rückkehr <span className="beschreibung"> <br />Hier findest Informationen zum Thema freiwillige Rückkehr als Geflüchteter in das Ursprungsland</span></span></a>
      
        <a href="/rückkehr"><span className="buttonbeitraggrün">
        <img src={rückkehr} className="formular" alt="formular" />freiwillige Rückkehr <span className="beschreibung"> <br />Hier findest Informationen zum Thema freiwillige Rückkehr als Geflüchteter in das Ursprungsland</span></span></a>

    </div>
  );
}