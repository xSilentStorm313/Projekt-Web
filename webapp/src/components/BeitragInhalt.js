import React from "react";
import formular from  "./images/kindergeldantraghalb.png"

export default function Inhalt() {

    return (
        <div>
            <h1 className="überschrift">Kindergeld</h1>
            <img src={formular} className="formular" alt="formular" />
        
                
            <a href="/beitrag">
                <span className="fragebeitrag">Ich hätte eine Frage zu Absatz 3 woher kriege ich folgende Informationen?</span>
                </a>
            <p className="komment">Du musst folgende Informationen aus deinen persönlichen Blättern welche dir die AOK zugesendet haben muss entnehmen</p>
            <p className="antwortkomment">Die kannst du auch anfordern  bei der AOK, falls du deine  nicht mehr findest</p>
            <p className="komment">Dazu liegt im folgenden Aritkel noch was vor: kindergeld</p>
        </div>
    )
}