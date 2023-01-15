import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
    return (
        <div className="buttonstartseite">
            <Link to="/login">
                <p className="buttonstartseitetext">Einloggen</p>
            </Link>
        </div>
    ) }
