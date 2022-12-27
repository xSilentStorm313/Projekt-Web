import React from "react";
import TitleBar from './components/TitleBar';
import InfoText from './components/InfoText';
import Button from './components/Button';
import Footer from './components/Footer';
import SocialMediaLogin from './components/SocialMediaLogin';
import './App.css';

function Home() {
    return (
        <div className="Home">
            <TitleBar />
            <div className="container">
                <InfoText />
            </div>
            <br/>
            <Button />
                <SocialMediaLogin />
        </div>
    );
}

export default Home;