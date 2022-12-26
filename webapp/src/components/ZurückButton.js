import React  from 'react';
import { AiOutlineLeft } from "react-icons/ai";


function ZurueckIcon({ onClick }) {
  return (
    <div className="zurueck-icon" onClick={onClick}>
      <AiOutlineLeft size={40} />
    </div>
  );
}


export default ZurueckIcon;
