import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class TeamSize extends Component {
    static contextType = PlayerContext;
    render() {
        const { handleNumber, noOfPlayers, players, team } = this.context;
        

        return (
            <div>
            <div className="ui form center">

                {players.length > 0 || team.length ? <h3>{noOfPlayers} player game</h3> :
                    <div className="space">
                        <label>Enter No. of Players</label>
                        <div className="sub-form">
                            <input className="center" type="number" value={noOfPlayers} onChange={handleNumber} min="0" />
                        </div>
                    </div>
                }
            </div>
            </div >
        )
    }
}

export default TeamSize;