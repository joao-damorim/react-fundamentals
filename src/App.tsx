import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SourceMap } from 'module';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'João'
  const newName = name.toUpperCase()

  const url = 'https://via.placeholder.com/150'

  function sum(a: number, b: number) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <h3>Meu nome é { newName }</h3>
      <h3>A soma é {sum(1,3)}</h3>
      <img src={url} alt="150x150"/>
      <HelloWorld />
    </div>
  );
}

export default App;
