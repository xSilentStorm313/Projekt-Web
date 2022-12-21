import React from "react";
import formular from "./images/kindergeldantraghalb.png";

export default function Button() {
    return (
        <div>
          <a href="/beitrag"><span className="buttonbeitrag">
            <img src={formular} className="formular" alt="formular" /> Kindergeld <p className="beschreibung">Frage zu Absatz 3</p> </span></a>
          <br/>
          <a href="/beitrag"><span className="buttonbeitrag">zwei</span></a>
          <br/>
          <a href="/beitrag"><span className="buttonbeitrag">drei</span></a>
          <br/>
          <a href="/beitrag"><span className="buttonbeitrag">vier</span></a>
          <br/>
        </div>
    );
}