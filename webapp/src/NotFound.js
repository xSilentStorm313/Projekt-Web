import { Link } from "react-router-dom";
import TitleBar from './components/Startseite/TitleBarStartseite';
import './App.css';

export default function NotFound() {
    return (
        <div>
            <TitleBar />
            <h1 className="errorüberschrift">404<br /> Ups, diese Seite existiert noch nicht</h1>
            
            <footer className="footererror">
                <p className="texterror">Hier kommst du wieder zur Startseite:</p>
                <Link to='/' className="linkerror">
                    <div className="button">
                        <input value="Startseite" className="buttonlogin" />
                    </div>
                </Link>
            </footer>
        
        </div>
    )
}