import React from "react";
import { Link } from "react-router-dom";

export default function ButtonRegestrierung() {
    return (
        <div className="button">
          <a>
            <Link to="/start">
            <input type="submit" value="JETZT REGISTRIEREN" className="registrierenweiterbutton"/>
            </Link>

          </a>
        </div>
    ) }