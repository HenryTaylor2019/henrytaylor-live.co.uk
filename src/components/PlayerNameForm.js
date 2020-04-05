import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';


class PlayerNameForm extends Component {
    static contextType = PlayerContext;

    render() {
        const { handleInput, handleSubmit, playerName, noOfPlayers, handleTeams, players, team } = this.context;

        let addPlayers = (noOfPlayers - players.length);

        let warningMessage;
        // Conditional managing winner message to be refactored 
        if (noOfPlayers < 4 && noOfPlayers > 0) {
            warningMessage = "Add more players"
        } else if (noOfPlayers > 16) {
            warningMessage = "Too Many Players"
        } else if (noOfPlayers % 2 !== 0 && noOfPlayers > 0) {
            warningMessage = "Must be even numbers"
        } else {
            warningMessage = "";
        }

        return (
            <div className="gen-style2">
                <div className="ui form" >
                    <form>
                        {warningMessage || handleTeams === true ? <p className="warning">{warningMessage}</p> :
                            <div>

                                {/* Manage visibilty to ensure players cannnot add players until team size has been decided */}
                                {noOfPlayers <= players.length || team.length > !0 ? null :
                                    <div>
                                        <label>Enter {addPlayers} Names</label>
                                        <input className="gen-style2" type="text" value={playerName} onChange={handleInput} />
                                        <div className="button-div">
                                            <button className="ui secondary button" onClick={handleSubmit}>Add Player</button>
                                        </div>
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