import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class TeamSize extends Component {
    static contextType = PlayerContext;
    render() {
        const { handleNumber, noOfPlayers, players, team } = this.context;
   

        return (
            <div className="center sub-form">
                <form className="ui form">

                    {players.length > 0 || team.length ? <p>You have chosen {noOfPlayers} players</p> :
                        <div>
                            <label>Enter No. of Players</label>
                            <input className="center sub-form" type="number" onChange={handleNumber} min="0" />
                        </div>
                    }
                </form>
            </div>
        )
    }
}

export default TeamSize;