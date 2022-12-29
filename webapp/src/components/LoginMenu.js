import React from "react";
import { Link } from "react-router-dom";

export default function LoginMenu() {

    return (
        <div className="login-menu">
            <h1 className="überschriftlogin">Einloggen</h1>
            <form>
                <label>
                    <div className="textlogin">
                        Benutzername:
                    </div>
                    <br />
                    <input type="text" name="username" className="input" placeholder="Benutzerename"/>
                </label>
                <br />
                <label >
                    <div className="textlogin">
                        Passwort:
                    </div>
                    <br />
                    <input type="password" name="password" className="input" placeholder="Passwort"/>
                </label>
                <br />
                <div className="button">
                    <Link to="/start">
                        <input type="submit" value="EINLOGGEN" className="buttonlogin" />
                    </Link>
                </div>
                <p className="passwortvergessen">Passwort vergessen</p>
                <br />
                <br />
                <p>Du hast kein Konto? <Link to="/registration" className="registrierung">Jetzt Registrieren</Link></p>
            </form>
        </div>
    );
}
