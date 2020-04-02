import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';


class PlayerTable extends Component {
    static contextType = PlayerContext;


    render() {
        const { playerNamesArr } = this.context;
        const { noOfPlayers } = this.context;
        const { handleTeams } = this.context;

        return (

            <div className="center table-data">
                <table className="ui celled table">
                    <tbody >
                        {
                            playerNamesArr.map((name, index) => (
                                <tr key={index <= noOfPlayers - 1 ? index + 1 : index}>
                                    <td >{index + 1}</td>
                                    <td className="table-data">{name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {playerNamesArr.length >= noOfPlayers && playerNamesArr.length > 0 ? 
                <button className="ui secondary button" onClick={handleTeams}>Make Game</button>
                : null}
            </div>
        )
    }
}

export default PlayerTable;