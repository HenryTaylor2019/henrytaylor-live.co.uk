import React, { Component } from 'react';
import PlayerContextProvider from './contexts/PlayerContext';


import TeamSize from './components/TeamSize';
import Header from './components/Header';
import PlayerNameForm from './components/PlayerNameForm';
import PlayerTable from './components/PlayerTable';
import Tournament from './components/Tournament';


class ComponentHandler extends Component {
    render() {
        const { handleInput, handleSubmit, playerName, noOfPlayers, handleTeams, players, team } = this.context;

        return (
            <div className="App">
                <Header />
                <PlayerContextProvider>
                    <TeamSize />
                    <PlayerNameForm />
                    <PlayerTable />
                    <Tournament />
                </PlayerContextProvider>
            </div>
        );
    }
}

export default ComponentHandler;
