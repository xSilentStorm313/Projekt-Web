import header from  "./welle_header Kopie.png" // anderer Speicherort
import React from "react"
import { Link } from "react-router-dom";

export default function TitleBarRegestrierung() {
    return (
        <div className="titlebar">
            <img src={header} className="headerWelle" alt="welle" />
            <Link to="/login">
            <button className="buttoneinloggen">EINLOGGEN</button>
            </Link>
            <br/><br/>
        </div>
    )
}