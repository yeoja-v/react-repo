import './App.css';
import React from 'react'
// import UserClone from './components/users/UserClone';
import Counter from './components/counter/Counter';
import Accordion from './components/pages/Accordion';
import UserRep from './components/users/UserRep';
import UserDitto from './components/users/UserDitto';
import UserClone from './components/users/UserClone';
import CreateAccount from './components/auth/CreateAccount';

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
      {/* <UserRep /> */}
      {/* <UserDitto /> */}
          </div>
  );
}

export default App;
