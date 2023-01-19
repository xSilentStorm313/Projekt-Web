import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import TitleBarHauptseite from '../BeiträgeLila/TitleBarHauptseiteLila';
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
    <div className="menu-container">
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
          <TitleBarHauptseite/>
          <ul>
          <br/><br/><br/><br/>
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
          <a className='abmelden' onClick={handleSubmit} href="/login" >Abmelden</a>
        </div>

      )}
      
    </div>
  );
}

export default Menu;
