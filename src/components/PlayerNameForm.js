import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';


class PlayerNameForm extends Component {
    static contextType = PlayerContext;


    render() {
        const { handleInput, handleSubmit, playerName, noOfPlayers, handleTeams, players, team } = this.context;

        let warningMessage;

        if (noOfPlayers < 4 && noOfPlayers >= 0) {
            warningMessage = "Add more players"
        } else if (noOfPlayers > 16) {
            warningMessage = "Too Many Players"
        } else if (noOfPlayers % 2 !== 0 && noOfPlayers > 0) {
            warningMessage = "Must be even numbers"
        } else {
            warningMessage = "";
        }

        return (
            <div className="center sub-form">
                <div className="ui form" onSubmit={handleSubmit}>
                    <form>
                        {warningMessage || handleTeams === true ? <p>{warningMessage}</p> :
                            <div>

                                <label>Enter Names</label>
                                {noOfPlayers <= players.length || team.length > !0 ? null :
                                    <div>
                                        <input className="center sub-form" value={playerName} type="text" onChange={handleInput} />


                                        <button className="ui button" onClick={handleSubmit}>Add Player</button>
                                    </div>
                                }
                            </div>
                        }
                    </form>
                </div>
            </div>
        )
    }
}

export default PlayerNameForm;