import './App.css';
import React from 'react'
// import UserClone from './components/users/UserClone';
import Counter from './components/counter/Counter';
import Accordion from './components/pages/Accordion';
import UserClone from './components/users/UserClone';
import CreateAccount from './components/auth/CreateAccount';
import Login from './components/auth/Login'

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
      <Login />
          </div>
  );
}

export default App;
