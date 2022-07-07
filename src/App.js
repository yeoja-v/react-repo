import './App.css';
import CreateAccount from './components/auth/CreateAccount';
import LoginV from './components/auth/LoginV';
import CookieContainer from './components/redux/cookie/CookieContainer';
import PizzaContainer from './components/redux/pizza/PizzaContainer';
// import Counter from './components/counter/Counter';
// import Accordion from "./components/pages/Accordion/index"
// import User from './components/user/User';

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <br />
      <Counter />
      <br />
      <User />
      <br /> */}
      {/* <CreateAccount /> */}
      {/* <LoginV /> */}
      <PizzaContainer />
      <CookieContainer />
    </div>
  )
}

export default App;


