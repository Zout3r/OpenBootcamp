import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* Componente de ejemplo funcional */}
          {/*<Greeting name="Jose"></Greeting>*/}
          {/* Componente de listado de tareas */}
          <TaskListComponent></TaskListComponent>
        </p>
      </header>
    </div>
  );
}

export default App;
