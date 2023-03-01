import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { FeedContext } from './store/feed-context';
import TextArea from './components/TextArea'

function App() {

  const feedContext = useContext(FeedContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <TextArea text={feedContext.feed}/>
    </div>
  );
}

export default App;
