import React, { createContext, Component } from 'react';
import PlayerContextProvider from './contexts/PlayerContext';


import TeamSize from './components/TeamSize';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <PlayerContextProvider>
        <TeamSize />

      </PlayerContextProvider>
    </div>
  );
}

export default App;
