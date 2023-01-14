import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Helfer from "./HelferButton";
import Hilfesuchender from "./HilfesuchenderButton";


function MenuIcon({ onClick }) {
  return (
    <div className="menu-icon" onClick={onClick}>
      <FaBars size={30}/>
    </div>
  );
}

function Menu({ items }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    fetch('/users/logout', { method: 'POST' })
      .then(res => {
        if(res.status === 200){
            window.location.href = '/';
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="menu-containergrün">
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <div className={`menugrün ${menuOpen ? 'open' : ''}`}>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
          <ul>
            <h1> Menü </h1>
            {items.map((item, index) => (
              <li key={index} onClick={() => window.location.href = item.link}>
                {item.text}
              </li>
            ))}
            <br/>
          </ul>
          <div className="button-container-grün">
            <Helfer />
            <Hilfesuchender />
          </div>
          <br/>
          <div className='abmeldengrün' onClick={handleSubmit}>Abmelden</div>
        </div>
      )}
    </div>
  );
}

export default Menu;