import React, { createContext, Component } from 'react';

export const PlayerContext = createContext();

class PlayerContextProvider extends Component {
    state = {
        playerName: '',
        players: [],
        noOfPlayers: 0,
        submittedPlayers: [],
        randomPlayer: '',
        team: [],
        // teamB: [],
    }

    handleNumber = (e) => {
        this.setState({ noOfPlayers: e.target.value });
        e.preventDefault();
    }

    handleInput = (e) => {

        this.setState({ playerName: e.target.value });
        e.preventDefault();
    }

    handleSubmit = (e) => {
        
        this.setState({
            playerName: '',
            players: [
                ...this.state.players,
                this.state.playerName
            ]
        });
        e.preventDefault();
    }

    handleGenerate = (e) => {
        // let { players } = this.context;
        
        this.setState({
            submittedPlayers: [
                ...this.state.submittedPlayers,
                this.state.players,]
        })
        e.preventDefault();

    }

    handleTeams = (e) => {
        let half = Math.floor(this.state.players.length / 2);
        this.setState({
           playerName: "",
           players: [],
           team: [...this.state.players],
        })
    }

    handleShuffle = (e) => {
 
        function shuffle(array) {
            var ctr = array.length, temp, index;

            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = array[ctr];
                array[ctr] = array[index];
                array[index] = temp;
            }
            return array;
        }

        this.setState({
           team: shuffle(this.state.team),
        })
    }

    render() {
      
        return (
            <PlayerContext.Provider value={{ 
                ...this.state, 
                // noOfPlayers: this.state.noOfPlayers,
                // players: this.state.players,
                // submittedPlayers: this.state.submittedPlayers,
                handleNumber: this.handleNumber, 
                handleInput: this.handleInput,
                handleSubmit: this.handleSubmit,
                handleGenerate: this.handleGenerate,
                handleTeams: this.handleTeams,
                handleShuffle: this.handleShuffle,
                }}>

                {this.props.children}
            </PlayerContext.Provider>
        );
    }
}

export default PlayerContextProvider;