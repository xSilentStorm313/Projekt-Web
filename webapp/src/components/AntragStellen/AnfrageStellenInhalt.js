import React from "react";
import { Link } from "react-router-dom";
import dateinbild from "../images/datein.svg";


export default function AntragStellenInhalt() {
    return (
        <div className="button">
            <br />
            <br />
            <br />
            <br />
            <h1 className="überschriftantrag">Antrag stellen</h1>
            <input type="text" name="Kommentar" className="inputbetreff" placeholder="Beftreff hinzufügen" />
            <br />
            <br />
            <textarea type="text" name="Kommentar" className="inputanfrage" placeholder="Anfrage formulieren" />
            <br />
            <br />
            <label for="antragdokument" className="dateinhinzufügen">
                <img src={dateinbild} className="dateinbild" alt="bildbüroklammer" />Datei hinzufügen</label>
            <input className="inputhidden" type="file" name="upload" id="antragdokument"></input>
            <br />
            <br />
            <br />
            <Link to="/anfragefertig">

                <input type="submit" value="Privat" className="buttonprivat" />
                <input type="submit" value="Öffentlich" className="buttonöffentlich" />
            </Link>
        </div>
    )
}