import logo from './github-actions.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Are you using <code>GitHub Actions</code> as your CI/CD ?
        </p>
        <a
          className="App-link"
          href="https://docs.github.com/en/actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GitHub Actions
        </a>
      </header>
    </div>
  );
}

export default App;
