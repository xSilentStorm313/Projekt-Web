import header from  "./welle_header.png" // anderer Speicherort
import logo from  "./helpinghandslogo.png" // anderer Speicherort
import React from "react"

export default function TitleBar() {
    return (
        <div className="titlebar">
            <img src={header} className="headerWelle" alt="welle" />
            <br/><br/>
            <img src={logo} className="logo" alt="schrift" />
            <br/><br/>
        </div>
    )
}            

//<link href='https://css.gg/add-r.css' rel='stylesheet'></link>
//            <i class="gg-add-r"></i>