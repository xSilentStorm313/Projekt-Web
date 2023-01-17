import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegestrierungText = () => {
  const [formData, setFormData] = useState({
    name: '',
    vorname: '',
    benutzername: '',
    email: '',
    birthdate: '',
    password: '',
    wohnsituation: '',
    children: '',
    country_of_origin: '',
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    for (const key in formData) {
      if (formData[key] === "") {
        setError("Bitte fülle alle erforderlichen Felder aus");
        isValid = false;
        break;
      }
    }
    if (isValid) {
      try {
        const options = {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Origin: "*",
            "Accept-Encoding": "gzip, deflate, br",
            Accept: "*/*",
          },
        };
        const res = await fetch("http://localhost:3001/users", options);
        if (!res.ok) throw new Error(res.statusText);
        navigate("/start");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <h1 className="registrierungsheader">Konto erstellen</h1>
      <form onSubmit={handleSubmit}></form>
      <p className="registrierungsbeschreibung">Name</p>
      <input
        type="text"
        name="name"
        className="input"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <p className="registrierungsbeschreibung">Vorname</p>
      <input
        type="text"
        name="vorname"
        className="input"
        placeholder="Vorname"
        value={formData.vorname}
        onChange={handleChange}
        required
      />
      <p className="registrierungsbeschreibung">Benutzername</p>
      <input
        type="text"
        name="benutzername"
        className="input"
        placeholder="Benutzername"
        value={formData.benutzername}
        onChange={handleChange}
        required
      />
      <p className="registrierungsbeschreibung">E-Mail</p>
      <input
        type="text"
        name="email"
        className="input"
        placeholder="E-Mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <p className="registrierungsbeschreibung">Geburtsdatum</p>
      <input
        type="text"
        name="birthdate"
        className="input"
        placeholder="Geburtsdatum"
        value={formData.birthdate}
        onChange={handleChange}
        required
      />
      <p className="registrierungsbeschreibung">Passwort</p>
      <input
        type="password"
        name="password"
        className="input"
        placeholder="Passwort"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <p className="registrierungsbeschreibung">Wohnsituation</p>
      <select
        name="wohnsituation"
        id="wohnsituation-select"
        className="auswaehleninput"
        value={formData.wohnsituation}
        onChange={handleChange}
        required
      >
        <option value="">Bitte auswählen</option>
        <option value="individuelles Wohnen">individuelles Wohnen</option>
        <option value="gemeinschaftliches Wohnen">gemeinschaftliches Wohnen</option>
        <option value="gemeinschaftliches Wohnen und Arbeiten">gemeinschaftliches Wohnen und Arbeiten</option>
        <option value="institutionelles Wohnen">institutionelles Wohnen</option>
      </select>

      <p className="registrierungsbeschreibung">Kinder</p>
      <select
        name="children"
        id="kinder-select"
        className="auswaehleninput"
        value={formData.children}
        onChange={handleChange}
      >
        <option value="">Bitte auswählen</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">5</option>
        <option value="3">6</option>
        <option value="3">Mehr als 6</option>
      </select>

      <p className="registrierungsbeschreibung">Herkunftsland</p>
      <select
        name="country_of_origin"
        id="herkunftsland-select"
        className="auswaehleninput"
        value={formData.country_of_origin}
        onChange={handleChange}
      >
        <option value="">Bitte auswählen</option>
        <option value="deutschland">Deutschland</option>
        <option value="griechenland">Griechenland</option>
        <option value="irak">Irak</option>
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
      <br />
      <br />
      {error && <p>{error}</p>}
      <div className="button">
          <input type="submit" value="Jetzt Registrieren" className="registrierenweiterbutton" onClick={handleSubmit} />
      </div>

    </div>



  )
}



export { RegestrierungText }
