import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home"
import Login from './Login';
import Hauptseite from "./Hauptseite"
import EinzelnerBeitrag from './EinzelnerBeitrag';
import Arbeitserlaubnis from './Arbeitserlaubnis';
import Asylantrag from './Asylantrag';
import Registration from './Registration';
import AnerkennungAbschlüsse from './AnerkennungAbschlüsse';
import Wohngeld from './Wohngeld';
import Vereinsanmeldung from './Vereinsanmeldung';
import Hauptseitegrün from './Hauptseitegrün';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/start" element={<Hauptseite />} />
      <Route exact path="/startgrün" element={<Hauptseitegrün />} />
      <Route exact path="/beitrag" element={<EinzelnerBeitrag />} />
      <Route exact path="/arbeitserlaubnis" element={<Arbeitserlaubnis />} />
      <Route exact path="/asylantrag" element={<Asylantrag />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/anerkennungabschluesse" element={<AnerkennungAbschlüsse />} />
      <Route exact path="/wohngeld" element={<Wohngeld />} />
      <Route exact path="/vereinsanmeldung" element={<Vereinsanmeldung />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
