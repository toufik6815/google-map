import React, { useState } from 'react';
import './App.css';
import Direction from './components/Direction/Direction';
import Map from './components/Map/Map';

function App() {
  const [origin, SetOrigin] = useState('');
  const [destination, SetDestination] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <Map></Map>
        <br></br>
        <input type="text" placeholder="Starting From" onBlur={e => SetOrigin(e.target.value)}/>
        <input type="text" placeholder="Going to" onBlur={e => SetDestination(e.target.value)}/>
        <Direction origin={origin} destination={destination}></Direction>
      </header>
    </div>
  );
}

export default App;
