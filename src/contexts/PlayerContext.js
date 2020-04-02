import React, { createContext, Component } from 'react';

export const PlayerContext = createContext();

class PlayerContextProvider extends Component {
    state = {
        noOfPlayers: 0,
        playerName: '',
        playerNamesArr: [],

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
            playerNamesArr: [
                ...this.state.playerNamesArr,
                this.state.playerName
            ]
        });
        e.preventDefault();
    }

    handleTeams = (e) => {
        let half = Math.floor(this.state.playerNamesArr.length / 2);
        this.setState({
           playerName: "",
           playerNamesArr: [],
           teamA: [...this.state.playerNamesArr],
        //    teamB: [...this.state.playerNamesArr.slice(half, this.state.playerNamesArr.length)]
        })
    }

    render() {
      
        return (
            <PlayerContext.Provider value={{ 
                ...this.state, 
                handleNumber: this.handleNumber, 
                handleInput: this.handleInput,
                handleSubmit: this.handleSubmit,
                handleTeams: this.handleTeams,
                }}>

                {this.props.children}
            </PlayerContext.Provider>
        );
    }
}

export default PlayerContextProvider;