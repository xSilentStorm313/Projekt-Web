import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home"
import Login from './Login';
import Hauptseite from "./Hauptseite"
import EinzelnerBeitrag from './EinzelnerBeitrag';
import Arbeitserlaubnis from './Arbeitserlaubnis';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/start" element={<Hauptseite />} />
      <Route exact path="/beitrag" element={<EinzelnerBeitrag />} />
      <Route exact path="/arbeitserlaubnis" element={<Arbeitserlaubnis />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
