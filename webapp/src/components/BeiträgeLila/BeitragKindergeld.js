import React from "react";
import formular from "./BeiträgeBilderLila/kindergeldantraghalb.png"

export default function Inhalt() {

    return (
        <div>
            <h1 className="überschrift">Kindergeld</h1>
            <img src={formular} className="formular" alt="formular" />
            <a href="/beitrag">
                <span className="fragebeitrag">Ich hätte eine Frage zu Absatz 3 woher kriege ich folgende Informationen?</span>
            </a>
            <p className="beitrag-kommentar-überschrift">Kommentare</p>
        </div>
    )
}