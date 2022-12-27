import React from "react";
import TitleBarRegestrierung from './components/TitelBarregestrierung';
import ButtonRegestrierung from './components/ButtonRegestrierung';
import Footer from './components/Footer';
import RegestrierungText from "./components/RegstrierungText";
import './App.css';

function Regestration() {
    return (
        <div className="Home">
            <TitleBarRegestrierung />
            <br/>
            <RegestrierungText/>
            <ButtonRegestrierung />
        </div>
    );
}

export default Regestration;