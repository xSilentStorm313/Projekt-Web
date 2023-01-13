import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div className="button-switch-hilfesuchender">
      <Link to="/start">
        <p className="button-switch-schrift">Hilfesuchender</p>
      </Link>
    </div>
  )
}
