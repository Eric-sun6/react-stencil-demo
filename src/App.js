import logo from './logo.svg';
import './App.css';
// import { JimoBadge } from 'jimotest'
import { JimoBadge } from './components/stencil-generated/index.ts';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JimoBadge bgColor={'red'} color={'green'} num={3} isPoint={true}></JimoBadge>
        <p>
          Edi1111t <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
