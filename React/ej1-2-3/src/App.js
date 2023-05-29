import logo from './logo.svg';
import './App.css';
import CompA from './components/container/compA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompA></CompA>
      </header>
    </div>
  );
}

export default App;
