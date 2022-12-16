import React from "react";
import TitleBar from './components/TitleBar';
import InfoText from './components/InfoText';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';

function Home() {
    return (
        <div className="Home">
            <TitleBar />
            <div className="container">
                <InfoText />
            </div>
            <Button />
            <Footer />
        </div>
    );
}

export default Home;