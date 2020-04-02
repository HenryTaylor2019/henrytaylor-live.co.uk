import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class Tournament extends Component {
    static contextType = PlayerContext;

    render() {
        const { team, handleShuffle } = this.context;

        // function shuffle(array) {
        //     var ctr = array.length, temp, index;

        //     while (ctr > 0) {
        //         index = Math.floor(Math.random() * ctr);
        //         ctr--;
        //         temp = array[ctr];
        //         array[ctr] = array[index];
        //         array[index] = temp;
        //     }
        //     return array;
        // }

        // let playerShuffle = shuffle(team);
        // let teamBShuffle = shuffle(teamB);


        return (
            <>
         
                <div> 
                    <table className="teams-div">
                        <tbody >
                            <tr>
                                <th>Team A</th>
                                <th>Team B</th>
                            </tr>
                            <tr>
                                <td>{playerShuffle[0]}</td>
                                <td>{playerShuffle[1]}</td>
                            </tr>
                            <tr>
                                <td>{playerShuffle[2]}</td>
                                <td>{playerShuffle[3]}</td>
                            </tr>
                            <tr>
                                <td>{playerShuffle[4]}</td>
                                <td>{playerShuffle[5]}</td>
                            </tr>
                            <tr>
                                <td>{playerShuffle[5]}</td>
                                <td>{playerShuffle[6]}</td>
                            </tr>
                            <tr>
                                <td>{playerShuffle[7]}</td>
                                <td>{playerShuffle[8]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="teams-div">
                    <button onClick={handleShuffle}>Shuffle</button>
                    </div>
                </div>
      
            </>
        )
    }
}

export default Tournament;