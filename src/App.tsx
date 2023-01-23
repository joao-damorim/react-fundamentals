import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SourceMap } from 'module';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';

function App() {

  const name = 'Maria'

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name='João'/>
      <SayMyName name={name}/>
      <Person name={name} age={10}/>
      <List />
      <Event />
      <Form />
    </div>
  );
}

export default App;
