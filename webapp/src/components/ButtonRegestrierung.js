import React from "react";
import { Link } from "react-router-dom";

export default function ButtonRegestrierung() {
    return (
        <div className="buttonlogin">
          <a>
            <Link to="/start">
            <input type="submit" value="Registrieren" className="reistriernweiterbutton"/>
            </Link>

          </a>
        </div>
    ) }