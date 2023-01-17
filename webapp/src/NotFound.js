import { Link } from "react-router-dom";
import TitleBar from './components/Startseite/TitleBarStartseite';
import MenuIcon from "./components/Menü/MenuLogikLila";
import ZurueckIcon from "./components/ZurückButton";
import './App.css';

export default function NotFound() {
    const items =[
        { text: 'Home', link: '/start' },
        { text: 'Account', },
        { text: 'Kategorien',},
        { text: 'Anfrage stellen', link: '/anfrage' },
        { text: 'Meine Chats', },
        ];

    return (
        <div>
            <MenuIcon items={items} />
            <Link to='/start'>
                <ZurueckIcon/>
            </Link>
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