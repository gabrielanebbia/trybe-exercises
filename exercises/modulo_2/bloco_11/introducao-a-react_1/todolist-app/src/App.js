import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listTasks = ['Acordar', 'Tomar café', 'Começar estudos', 'Jogar', 'Descansar'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>To Do List</h1>
      </header>
      <body className="App-body">
      <h2>My List</h2>
      <ol className="App-ol">{ listTasks.map((item) => Task(item)) }</ol>
      </body>
    </div>
  );
}

export default App;
