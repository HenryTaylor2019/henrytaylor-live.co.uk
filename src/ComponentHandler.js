import React, { Component } from 'react';
import PlayerContextProvider from './contexts/PlayerContext';


import TeamSize from './components/TeamSize';
import Header from './components/Header';
import PlayerNameForm from './components/PlayerNameForm';
import PlayerTable from './components/PlayerTable';
import Tournament from './components/Tournament';
import TournamentPage from './components/TournamentPage';
import Footer from './components/Footer';


class ComponentHandler extends Component {
    render() {
        const { handleInput, handleSubmit, playerName, noOfPlayers, handleTeams, players, team } = this.context;

        return (
            <div className="main-body">
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
                    {/* <Tournament /> */}
                    <TournamentPage />
                    <Footer />
                </PlayerContextProvider>
            </div>
        );
    }
}

export default ComponentHandler;
