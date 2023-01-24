import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SourceMap } from 'module';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';
import Conditional from './components/Conditional';
import AnotherList from './components/AnotherList';
import YourName from './components/YourName';
import Salutation from './components/Salutation';

function App() {

  const name = 'Maria'

  const myItems = ['React', 'Vue', 'Angular']

  const [name2, setName2] = useState()

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name='João'/>
      <SayMyName name={name}/>
      <Person name={name} age={10}/>
      <List />
      <Event />
      <Form />
      <Conditional />
      <h1>Renderização do Listas</h1>
      <AnotherList myItems={myItems}/>
      <AnotherList myItems={[]}/>
      <h1>State Lift</h1>
      <YourName setName2={setName2}/>
      <Salutation name2={name2}/>
    </div>
  );
}

export default App;
