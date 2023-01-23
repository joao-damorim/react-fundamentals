import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'João'
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <h3>Meu nome é: { name }</h3>
    </div>
  );
}

export default App;
