import './App.css';
import TitleBar from './components/TitleBar';
import InfoText from './components/InfoText';
import Button from './components/Button';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TitleBar/>
      <div className="container">
        <InfoText/>
        <Button/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
