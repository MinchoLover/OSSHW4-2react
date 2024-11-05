import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.js';
import Component1 from './components/component1.js';
import Component2 from './components/component2.js';
import Component3 from './components/component3.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         22100667 Minchan Jeong
        </p>
        <Hello />
        <Component1/>
        <Component2/>
        <Component3/>
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
