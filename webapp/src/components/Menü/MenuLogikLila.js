import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Helfer from "./HelferButton";
import Hilfesuchender from "./HilfesuchenderButton";


function MenuIcon({ onClick }) {
  return (
    <div className="menu-icon" onClick={onClick}>
      <FaBars size={30} />
    </div>
  );
}

function Menu({ items }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu-container">
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
          <ul>
            <h1> Menü </h1>
            {items.map((item, index) => (
              <li key={index} onClick={() => window.location.href = item.link}>
                {item.text}
              </li>
            ))}
            <br />
          </ul>
          <div className="button-container-lila">
            <Helfer />
            <Hilfesuchender />
          </div>
          <br />
          <div className='abmelden'>Abmelden</div>
        </div>

      )}
    </div>
  );
}

export default Menu;
