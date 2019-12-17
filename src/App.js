import React from 'react';
import Home from './components/Home';
import Activities from './components/Activities';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Home">
        <Home />
      </div>
      <div className="banner">
        <Activities />
      </div>
    </div>
  );
}

export default App;
