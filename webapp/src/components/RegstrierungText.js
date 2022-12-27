import React from "react";


export default function RegestrierungText() {
    return (
        <div>
            <h1 className="regestrieungheader">Konto erstellen</h1>
            <p className="regestrierungbeschreibung">Name</p>
            <input type="text" name="Name" className="input" placeholder="Name"/>
            <p className="regestrierungbeschreibung">Vorname</p>
            <input type="text" name="Vorname" className="input" placeholder="Vorname"/>
            <p className="regestrierungbeschreibung">Benutzername</p>
            <input type="text" name="Benutzername" className="input" placeholder="Benutzername"/>
            <p className="regestrierungbeschreibung">E-Mail</p>
            <input type="text" name="E-Mail" className="input" placeholder="E-Mail"/>
            <p className="regestrierungbeschreibung">E-Mail bestätigen</p>
            <input type="text" name="E-Mail bestätigen" className="input" placeholder="E-Mail bestätigen"/>
            <p className="regestrierungbeschreibung">Geburtsdatum</p>
            <input type="text" name="Geburtsdatum" className="input" placeholder="Geburtsdatum"/>
            <p className="regestrierungbeschreibung">Passwort</p>
            <input type="password" name="password" className="input" placeholder="Passwort" />
        </div>
    )
}