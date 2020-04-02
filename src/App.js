import React, { createContext, Component } from 'react';
import PlayerContextProvider from './contexts/PlayerContext';


import TeamSize from './components/TeamSize';
import Header from './components/Header';
import PlayerNameForm from './components/PlayerNameForm';


function App() {
  return (
    <div className="App">
      <Header />
      <PlayerContextProvider>
        <TeamSize />
        <PlayerNameForm />

      </PlayerContextProvider>
    </div>
  );
}

export default App;
