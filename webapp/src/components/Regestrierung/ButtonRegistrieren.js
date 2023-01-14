import React from "react";
import { Link } from "react-router-dom";
import {RegestrierungText } from './RegistrierenText';
// import {RegestrierungText } from './RegistrierenText';



export default function ButtonRegestrierung() {
  return (

    <div className="button">
      <Link to="/start">
        <input type="submit" value="JETZT REGISTRIEREN" className="registrierenweiterbutton" onClick={RegestrierungText} />
      </Link>
    </div>
  )
}