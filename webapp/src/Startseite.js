import React from "react";
import TitleBar from './components/TitleBar';
import StartseiteText from './components/StartseiteText';
import Button from './components/Button';
import SocialMediaLogin from './components/SocialMediaLogin';
import Footer from './components/Footer'
import './App.css';

function Home() {
    return (
        <div className="Home">
            <TitleBar />
            <div className="container">
                <StartseiteText />
            </div>
            <br/>
            <Button />
            <SocialMediaLogin />
            <Footer />
        </div>
    );
}

export default Home;