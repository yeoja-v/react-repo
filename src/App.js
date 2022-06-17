import { useState } from 'react' 
import logo from './logo.svg';
import './App.css';
import LinkContainer from './components/navigation/navbar/LinkContainer';

function App() {
  const [hideLink, setHideLink] = useState(false)

  const hideLinkHandler = () => {
    setHideLink(!hideLink)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { !hideLink ? <LinkContainer /> : null }
        <br />
        <button onClick={hideLinkHandler}>{!hideLink ? "Hide Links" : "Show Links"}</button>
      </header>
    </div>
  )
}

export default App;


