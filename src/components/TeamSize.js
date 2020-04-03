import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class TeamSize extends Component {
    static contextType = PlayerContext;
    render() {
        const { handleNumber, noOfPlayers, players, team } = this.context;
   
        return (
            <div className="sub-form">
                <div className="ui form center">

                    {players.length > 0 || team.length ? <p>You have chosen {noOfPlayers} players</p> :
                        <div>
                            <label>Enter No. of Players</label>
                            <input className="sub-form" type="number" value={noOfPlayers} onChange={handleNumber} min="0" />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default TeamSize;