import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import LinkContainer from './components/LinkContainer';
import Accordion from "./components/pages/Accordion/index"
import Counter from './components/Counter';

// const intialState = false

function App() {

  return (
    <div className="App">
      <Accordion />
      <Counter />

    </div>
  );
}

export default App;
