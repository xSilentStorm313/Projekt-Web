import React from "react";
import { Link } from "react-router-dom";

export default function LoginMenu() {

    return (
        <div className="login-menu">
            <h1 className="text">EINLOGGEN</h1>
            <form>
                <label>
                    <div className="text">
                        Benutzername:
                    </div>
                    <br />
                    <input type="text" name="username" className="input" />
                </label>
                <br />
                <label >
                    <div className="text">
                        Passwort:
                    </div>
                    <br />
                    <input type="password" name="password" className="input" />
                </label>
                <br />
                <div className="buttonlogin">
                    <Link to="/start">
                        <input type="submit" value="EINLOGGEN" />
                    </Link>
                </div>
            </form>
        </div>
    );
}
