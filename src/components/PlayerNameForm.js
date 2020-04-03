import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';


class PlayerNameForm extends Component {
    static contextType = PlayerContext;

    render() {
        const { handleInput, handleSubmit, playerName, noOfPlayers, handleTeams, players, team } = this.context;

        let warningMessage;

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
            <div className="sub-form">
                <div className="ui form" onSubmit={handleSubmit}>
                    <form>
                        {warningMessage || handleTeams === true ? <p className="warning">{warningMessage}</p> :
                            <div>

                                {noOfPlayers <= players.length || team.length > !0 ? null :
                                    <div>
                                        <label>Enter Names</label>

                                        <input className="sub-form" type="text" value={playerName} onChange={handleInput} />
                                        <div className="button">
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