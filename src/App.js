import React from 'react';
import './App.css';
import { Player } from './components/Player';
import { Playground } from './components/Playground';

function App() {
  return (
    <div className="App">
      <Player />
      <Playground />
    </div>
  );
}

export default App;
