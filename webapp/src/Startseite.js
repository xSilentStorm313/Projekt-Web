import React from "react";
import TitleBar from './components/Startseite/TitleBarStartseite';
import StartseiteText from './components/Startseite/StartseiteText';
import Einloggenbutton from './components/Startseite/Einloggenbutton';
import SocialMediaLogin from './components/Startseite/SocialMediaLogin';
import Footer from './components/Footer'
import './App.css';

function Home() {
    return (
        <div className="Home">
            <TitleBar />
            <div className="container">
                <StartseiteText />
            </div>
            <Einloggenbutton />
            <SocialMediaLogin />
            <div className="footer-container">
            <Footer />
            </div>
        </div>
    );
}

export default Home;