import './App.css';
import React from 'react'
import UserClone from './components/users/UserClone';
import Counter from './components/counter/Counter';
import Accordion from './components/pages/Accordion';
import UserDitto from './components/users/UserDitto';

// const intialState = false

function App() {

  return (
    <div className="App">
      <Accordion />
      <Counter />
      <UserDitto />
    </div>
  );
}

export default App;
