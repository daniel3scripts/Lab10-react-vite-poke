import logo from './logo.svg';
import { Controls } from './componentes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola que tal, Vite + React!(Reactjs) </p>

        <Controls />
      </header>
    </div>
  );
}

export default App;
