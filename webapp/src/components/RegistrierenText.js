import React from "react";


export default function RegestrierungText() {
    return (
        <div>
            <h1 className="registrierungsheader">Konto erstellen</h1>
            <p className="registrierungsbeschreibung">Name</p>
            <input type="text" name="Name" className="input" placeholder="Name" />
            <p className="registrierungsbeschreibung">Vorname</p>
            <input type="text" name="Vorname" className="input" placeholder="Vorname" />
            <p className="registrierungsbeschreibung">Benutzername</p>
            <input type="text" name="Benutzername" className="input" placeholder="Benutzername" />
            <p className="registrierungsbeschreibung">E-Mail</p>
            <input type="text" name="E-Mail" className="input" placeholder="E-Mail" />
            <p className="registrierungsbeschreibung">E-Mail bestätigen</p>
            <input type="text" name="E-Mail bestätigen" className="input" placeholder="E-Mail bestätigen" />
            <p className="registrierungsbeschreibung">Geburtsdatum</p>
            <input type="text" name="Geburtsdatum" className="input" placeholder="Geburtsdatum" />
            <p className="registrierungsbeschreibung">Passwort</p>
            <input type="password" name="password" className="input" placeholder="Passwort" />
            
                <p className="registrierungsbeschreibung">Wohnsituation</p>
                <select name="wohnsituation" id="wohnsituation-select" className="auswaehleninput">
                <option value="">Bitte auswählen</option>
                <option value="individuellesWohnen">individuelles Wohnen</option>
                <option value="gemeinschaftlichesWohnen">gemeinschaftliches Wohnen</option>
                <option value="gemeinschaftlichesWohnenundArbeiten">gemeinschaftliches Wohnen und Arbeiten</option>
                <option value="institutionellesWohnen">institutionelles Wohnen</option>
                </select>

                <p className="registrierungsbeschreibung">Kinder</p>
                <select name="kinder" id="kinder-select" className="auswaehleninput">
                <option value="">Bitte auswählen</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                </select>

                <p className="registrierungsbeschreibung">Herkunftsland</p>
                <select name="herkunftsland" id="herkunftsland-select" className="auswaehleninput">
                <option value="">Bitte auswählen</option>
                <option value="deutschland">Deutschland</option>
                <option value="griechenland">Griechenland</option>
                <option value="iran">Iran</option>
                <option value="ukraine">Ukraine</option>
                <option value="rumänien">Rumänien</option>
                <option value="frankreich">Frankreich</option>
                <option value="polen">Polen</option>
                <option value="schweden">Schweden</option>
                <option value="spanien">Spanien</option>
                <option value="österreich">Österrreich</option>
                <option value="japan">Japan</option>
                <option value="kroatien">Kroatien</option>
                <option value="lichtenstein">Lichtenstein</option>
                <option value="afganistan">Afganistan</option>
                <option value="kenia">Kenia</option>
                <option value="peru">Peru</option>
                </select>
                <br/>
                <br/>
        </div>
    )
}