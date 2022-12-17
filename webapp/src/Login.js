import React from "react";
import TitleBar from './components/TitleBar';
import Footer from "./components/Footer";
import LoginMenu from "./components/LoginMenu";
import './Login.css'

function Login() {
    return (
        <div className="App">
            <TitleBar />
            <LoginMenu/>
            <Footer />
        </div>
    );
}

export default Login;