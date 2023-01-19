import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Startseite from "./Startseite"
import Login from './Login';
import Hauptseitelila from "./Lila/Hauptseitelila"
import Kindergeld from './Lila/Kindergeld';
import Arbeitserlaubnis from './Lila/Arbeitserlaubnis';
import Asylantrag from './Lila/Asylantrag';
import Registration from './Registration';
import AnerkennungAbschlüsse from './Lila/AnerkennungAbschlüsse';
import Wohngeld from './Lila/Wohngeld';
import Vereinsanmeldung from './Lila/Vereinsanmeldung';
import Hauptseitegrün from './Grün/Hauptseitegrün';
import Rückkehr from './Grün/Rückkehr';
import Verkehr from './Grün/Verkehr';
import AnfrageStellen from './AnfrageStellen';
import AnfrageFertig from './AnfrageFertig';
import NotFound from './NotFound';
import BeitragInhaltRückkehrLila from './components/BeiträgeLila/BeitragInhaltRückkehrLila';


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
      <Route exact path="/rückkehrlila" element={<BeitragInhaltRückkehrLila />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
