import React from "react";
import TitleBarRegestrierung from './components/TitelBarregestrierung';
import Button from './components/Button';
import Footer from './components/Footer';
import RegestrierungText from "./components/RegstrierungText";
import './App.css';

function Regestration() {
    return (
        <div className="Home">
            <TitleBarRegestrierung />
            <br/>
            <RegestrierungText/>
            <Button />
            <Footer />
        </div>
    );
}

export default Regestration;