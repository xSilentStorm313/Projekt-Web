import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Startseite from "./Startseite"
import Login from './Login';
import Hauptseitelila from "./Hauptseitelila"
import Kindergeld from './Kindergeld';
import Arbeitserlaubnis from './Arbeitserlaubnis';
import Asylantrag from './Asylantrag';
import Registration from './Registration';
import AnerkennungAbschlüsse from './AnerkennungAbschlüsse';
import Wohngeld from './Wohngeld';
import Vereinsanmeldung from './Vereinsanmeldung';
import Hauptseitegrün from './Hauptseitegrün';
import Rückkehr from './Rückkehr';
import Verkehr from './Verkehr';
import AnfrageStellen from './AnfrageStellen';
import AnfrageFertig from './AnfrageFertig';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Startseite/>} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/start" element={<Hauptseitelila />} />
      <Route exact path="/startgrün" element={<Hauptseitegrün />} />
      <Route exact path="/kindergeld" element={<Kindergeld />} />
      <Route exact path="/arbeitserlaubnis" element={<Arbeitserlaubnis />} />
      <Route exact path="/asylantrag" element={<Asylantrag />} />
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/anerkennungabschluesse" element={<AnerkennungAbschlüsse />} />
      <Route exact path="/wohngeld" element={<Wohngeld />} />
      <Route exact path="/vereinsanmeldung" element={<Vereinsanmeldung />} />
      <Route exact path="/rückkehr" element={<Rückkehr />} />
      <Route exact path="/verkehr" element={<Verkehr />} />
      <Route exact path="/anfrage" element={<AnfrageStellen />} />
      <Route exact path="/anfragefertig" element={<AnfrageFertig />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
