import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <button className="button-switch-helfer">
      <Link to="/startgrün">
        <p className="button-switch-schrift">Helfer</p>
      </Link>
    </button>
  )
}

