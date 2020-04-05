import React, { Component } from 'react';
import PlayerContextProvider from './contexts/PlayerContext';

import TeamSize from './components/TeamSize';
import Header from './components/Header';
import PlayerNameForm from './components/PlayerNameForm';
import PlayerTable from './components/PlayerTable';
import TournamentPage from './components/TournamentPage';
import Footer from './components/Footer';

// Components managed here before rendering in app for styling amendments

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
                    <Footer />
                </PlayerContextProvider>
            </div>
        );
    }
}

export default ComponentHandler;
