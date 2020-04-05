import React, { Component } from 'react';
import PlayerContextProvider from './contexts/PlayerContext';

import TeamSize from './components/TeamSize';
import Header from './components/Header';
import PlayerNameForm from './components/PlayerNameForm';
import PlayerTable from './components/PlayerTable';
import TournamentPage from './components/TournamentPage';
import Footer from './components/Footer';
import RoundTwo from './components/RoundTwo';


class ComponentHandler extends Component {
    render() {

        return (
            <div className="container-md">
                <Header />
                <PlayerContextProvider>
                    <div className="card main-form">
                        <TeamSize />
                        <PlayerNameForm />
                        <PlayerTable />
                    </div>
                    <TournamentPage />
                    <RoundTwo />
                    <Footer />
                </PlayerContextProvider>
            </div>
        );
    }
}

export default ComponentHandler;
