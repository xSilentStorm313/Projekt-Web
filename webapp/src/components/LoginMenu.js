import React from "react";
import { Link } from "react-router-dom";

export default function LoginMenu() {

    return (
        <div className="login-menu">
            <h1>EINLOGGEN</h1>
            <form>
                <label>
                    Benutzername:
                    <br />
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Passwort:
                    <br />
                    <input type="password" name="password" />
                </label>
                <br />
                <Link to="/start">
                <input type="submit" value="EINLOGGEN" />
                </Link>
            </form>
        </div>
    );
}
