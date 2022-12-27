import React from 'react';
import './Switch.css';

const Switch = () => {
  return (
    <>
      <h1 className="text-left-right">
        <span className="left-text">Hilfesuchend</span>
        <span className="byline">Helfer</span>
      </h1>

      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        placeholder="placeholder text"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;