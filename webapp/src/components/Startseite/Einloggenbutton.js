import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
    return (
        <div className="buttonlogin">
            <Link to="/login">
                <p className="buttonlogintext">EINLOGGEN</p>
                </Link>
        </div>
    ) }