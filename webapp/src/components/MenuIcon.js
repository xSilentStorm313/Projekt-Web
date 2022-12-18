import React, { useState } from 'react';

function MenuIcon({ onClick }) {
  return (
    <div className="menu-icon" onClick={onClick}>
      Menu Icon
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
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
