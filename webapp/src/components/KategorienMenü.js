import React from "react";
import { Link } from "react-router-dom";

function KategorienMenü({ items }) {
    return (
        <ul>
        <h1> Kategorien </h1>
        {items.map((item, index) => (
          <li key={index}>{item}
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
        <br/>
      </ul>
);
}