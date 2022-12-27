import header from  "./images/welle_header.png" // anderer Speicherort
import React from "react"

export default function TitleBarRegestrierung() {
    return (
        <div className="titlebar">
            <img src={header} className="headerWelle" alt="welle" />
            <br/><br/>
        </div>
    )
}