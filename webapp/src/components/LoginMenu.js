import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginMenu() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [user_id, setID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://backend-projektweb.onrender.com/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error);
            }

            setToken(data.token);
            localStorage.setItem('token', data.token);
            setID(data.user_id);
            localStorage.setItem('user_id', data.user_id);
            navigate('/start')
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="login-menu">
            <h1 className="überschriftlogin">Einloggen</h1>
            {error && <p className="loginerrorschrift">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <div className="textlogin">
                        E-Mail:
                    </div>
                    <br />
                    <input
                        type="text"
                        name="email"
                        className="input"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    <div className="textlogin">
                        Passwort:
                    </div>
                    <br />
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <div className="button">
                    <input type="submit" value="Einloggen" className="buttonlogin" />
                </div>
                <p className="passwortvergessen">Passwort vergessen</p>
                <br />
                <br />
                <p>
                    Du hast kein Konto?{" "}
                    <Link to="/registration" className="registrierung">
                        Jetzt Registrieren
                    </Link>
                <br />
                </p>
            </form>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

