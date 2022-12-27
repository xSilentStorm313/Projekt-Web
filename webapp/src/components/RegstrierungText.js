import React from "react";


export default function RegestrierungText() {
    return (
        <div>
            <h1>Konto erstellen</h1>
            <input type="text" name="Name" className="input" placeholder="Name"/>
            <input type="text" name="Vorname" className="input" placeholder="Vorname"/>
            <input type="text" name="Benutzername" className="input" placeholder="Benutzername"/>
            <input type="text" name="E-Mail" className="input" placeholder="E-Mail"/>
            <input type="text" name="E-Mail bestätigen" className="input" placeholder="E-Mail bestätigen"/>
            <input type="text" name="Geburtsdatum" className="input" placeholder="Geburtsdatum"/>
            <input type="password" name="password" className="input" placeholder="Passwort" />
        </div>
    )
}