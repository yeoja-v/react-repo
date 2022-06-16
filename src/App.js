import {useState} from 'react' 
import logo from './logo.svg';
import './App.css';
import LinkContainer from './components/LinkContainer';
import Paragraph from './components/Paragraph';

function App() {
  const [hideLink, setHideLink] = useState(false)

  const hideLinkHandler = () => {
    setHideLink(!hideLink)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Paragraph content="My first paragraph" />
        <Paragraph content="My second paragraph" />
        { !hideLink ? <LinkContainer /> : null }
        <br />
        <button onClick={hideLinkHandler}>{hideLink ? "Show Links" : "Hide Links"}</button>
      </header>
    </div>
  )
}

export default App;


