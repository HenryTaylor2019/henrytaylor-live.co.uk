import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class TeamSize extends Component {
    static contextType = PlayerContext;
    render() {
        const {handleNumber} = this.context;

        return (
                <div className="center sub-form">
                    <form className="ui form">

                        <label>Enter No. of Players</label>
                        <input className="center sub-form" type="number" onChange={handleNumber} min="0" />

                    </form>
                </div>
        )
    }
}

export default TeamSize;