import React from "react";
import formular from "./BeiträgeBilderLila/kindergeldantraghalb.png"

export default function Inhalt() {

    return (
        <div>
            <h1 className="überschrift">Kindergeld</h1>
            <img src={formular} className="formular" alt="formular" />
            <button className="fragebeitrag">Ich hätte eine Frage zu Absatz 3 woher kriege ich folgende Informationen?</button>
            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <div class="line"></div>
            <br />
        </div>
    )
}