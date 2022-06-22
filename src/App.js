import './App.css';
import Accordion from "./components/pages/Accordion/index"
import Counter from './components/counter/Counter';
import User from './components/users/User'
// const intialState = false

function App() {

  return (
    <div className="App">
      <Accordion />
      <Counter />
      <User />
    </div>
  );
}

export default App;
