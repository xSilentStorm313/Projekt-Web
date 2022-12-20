import React from "react";
import formular from  "./images/kindergeldantraghalb.png"

export default function Inhalt() {

    return (
        <div>
            <h1 className="überschrift">Kindergeld</h1>
            <img src={formular} className="formular" alt="formular" />
            <br /><br />
        </div>
    )
}