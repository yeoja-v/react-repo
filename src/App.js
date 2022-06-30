import './App.css';
import React from 'react'
// import UserClone from './components/users/UserClone';
import Counter from './components/counter/Counter';
import Accordion from './components/pages/Accordion';
import UserClone from './components/users/UserClone';
import CreateAccount from './components/auth/CreateAccount';
import CreateProfile from './components/auth/CreateProfile';

// const intialState = false

function App() {

  return (
    <div className="App">
      <Accordion />
      <br />
      <Counter />
      <br />
      <UserClone />
      <br />
      <CreateAccount />
          </div>
  );
}

export default App;
