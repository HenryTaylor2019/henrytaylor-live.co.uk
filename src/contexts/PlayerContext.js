import React, { createContext, Component } from 'react';

export const PlayerContext = createContext();

class PlayerContextProvider extends Component {
    state = {
        playerName: '',
        players: [],
        noOfPlayers: null,
        submittedPlayers: [],
        randomPlayer: '',
        team: [],
        roundOneWinners: [],
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

    handleTeams = () => {
  
        this.setState({
           playerName: "",
           players: [],
           team: [...this.state.players],
        })
    }

    handleShuffle = () => {
 
        let shuffle = (array) => {
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

    handleReset = () => {

        this.setState({
            playerName: '',
            players: [],
            noOfPlayers: null,
            submittedPlayers: [],
            randomPlayer: '',
            team: [],
        })
    }

    handleRoundTwo = (e) => {
        
        this.setState({
            roundOneWinners: [
                ...this.state.roundOneWinners,
                this.state.playerName
            ]
        });
        e.preventDefault();
    }



    render() {
      
        return (
            <PlayerContext.Provider value={{ 
                ...this.state, 
                handleNumber: this.handleNumber, 
                handleInput: this.handleInput,
                handleSubmit: this.handleSubmit,
                handleGenerate: this.handleGenerate,
                handleTeams: this.handleTeams,
                handleShuffle: this.handleShuffle,
                handleReset: this.handleReset,
                handleRoundTwo: this.handleRoundTwo,
                }}>

                {this.props.children}
            </PlayerContext.Provider>
        );
    }
}

export default PlayerContextProvider;