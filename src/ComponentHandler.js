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
            <div>
                <Header />
                <PlayerContextProvider>
                    <div className="card main-form">
                        <div className="">
                            <TeamSize />
                        </div>
                        <div className="">
                            <PlayerNameForm />
                        </div>
                        <div className="">
                            <PlayerTable />
                        </div>
                    </div>
                    <Tournament />
                </PlayerContextProvider>
            </div>
        );
    }
}

export default ComponentHandler;
