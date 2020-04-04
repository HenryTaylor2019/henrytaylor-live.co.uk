import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';


class PlayerTable extends Component {
    static contextType = PlayerContext;

    render() {
        const { players, noOfPlayers, handleTeams } = this.context;

        return (

            <div className="center main-form">
                <table className="ui celled table">
                    <tbody>
                        {    
                            players.map((name, index) => (
                                <tr key={index <= noOfPlayers - 1 ? index + 1 : index}>
                                    <td >{index + 1}</td>
                                    <td>{name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* Start game only when sufficiant players have been assigned */}
                {players.length >= noOfPlayers && players.length > 0 ? 
                <button className="ui secondary button" onClick={handleTeams}>Make Game</button>
                : null}
            </div>
        )
    };
}

export default PlayerTable;