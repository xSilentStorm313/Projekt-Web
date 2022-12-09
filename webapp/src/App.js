import './App.css';
import Footer from './components/Footer';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <TitleBar/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
