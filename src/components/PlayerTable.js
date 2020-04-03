import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';


class PlayerTable extends Component {
    static contextType = PlayerContext;

    render() {
        const { players } = this.context;
        const { noOfPlayers } = this.context;
        const { handleTeams } = this.context;

        return (

            <div className="center table-data">
                <table className="ui celled table">
                    <tbody >
                        {
                            players.map((name, index) => (
                                <tr key={index <= noOfPlayers - 1 ? index + 1 : index}>
                                    <td >{index + 1}</td>
                                    <td className="table-data">{name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {players.length >= noOfPlayers && players.length > 0 ? 
                <button className="btn btn-primary" onClick={handleTeams}>Make Game</button>
                : null}
            </div>
        )
    };
}

export default PlayerTable;