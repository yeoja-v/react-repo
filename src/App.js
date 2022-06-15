import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LinkContainer from './components/LinkContainer';

// const intialState = false

function App() {
  const [hideLink, setHideLink] = useState(false)
  // console.log(useState(true));

const hideLinkHandler = () => {
  setHideLink(!hideLink) 
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { !hideLink ? <LinkContainer /> : null }
        <br />
        <button onClick={hideLinkHandler}>{hideLink ? "Show Links" : "Hide Links"}</button>
      </header>
    </div>
  );
}

export default App;
