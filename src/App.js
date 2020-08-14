import React from 'react';
import './App.css';
import NuevaTarea from './components/nuevaTarea'
import { ListaTareas } from './components/listaTareas';

function App() {
  return (
    <div className="app">
      <NuevaTarea></NuevaTarea>
      <ListaTareas></ListaTareas>
    </div>
  );
}

export default App;
