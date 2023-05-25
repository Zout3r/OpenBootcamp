import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greeting name="Jose"></Greeting>
        </p>
      </header>
    </div>
  );
}

export default App;
