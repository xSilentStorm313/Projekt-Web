import React from "react";
import TitleBar from './components/Startseite/TitleBarStartseite';
import Footer from "./components/Footer";
import LoginMenu from "./components/LoginMenu";
import './Login.css'

function Login() {
    return (
        <div className="App">
            <TitleBar />
            <LoginMenu/>
            <div className="footer-container">
            <Footer />
            </div>
        </div>
    );
}

export default Login;