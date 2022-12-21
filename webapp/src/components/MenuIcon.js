import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Switch from "./SwitchButton"

function MenuIcon({ onClick }) {
  return (
    <div className="menu-icon" onClick={onClick}>
      <FaBars size={30}/>
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
            {items.map((item, index) => (
              <li key={index}>{item}
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <Switch />
        </div>
      )}
    </div>
  );
}

export default Menu;
