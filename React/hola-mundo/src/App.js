import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* Componente de ejemplo funcional */}
          {/*<Greeting name="Jose"></Greeting>*/}
          {/* Componente de listado de tareas */}
          {/*<TaskListComponent></TaskListComponent>*/}
          <Ejemplo1></Ejemplo1>
        </p>
      </header>
    </div>
  );
}

export default App;
