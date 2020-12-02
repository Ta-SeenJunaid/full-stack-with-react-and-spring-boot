import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoApp />
    </div>
  )
}

export default App;
