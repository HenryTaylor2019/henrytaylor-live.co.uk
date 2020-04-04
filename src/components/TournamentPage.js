import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class TournamentPage extends Component {
    static contextType = PlayerContext;

    render() {
        const { team, suddenDeathTeam } = this.context;
        let visible = team.length > 0 ? "card tournament-div" : null;

        let shuffle = (array) => {
            var ctr = array.length, temp, index;
            // To ensure random selection of players
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = array[ctr];
                array[ctr] = array[index];
                array[index] = temp;
            }
            return array;
        }

        let playerShuffle = shuffle(team);

        return (
            <>
                {suddenDeathTeam.length === 0 ?
                    <div className={visible}>
                        <div className="ui equal width grid">
                            {/* Conditionals used to only display matches per number of players */}
                            {team.length >= 4 ?
                                <div className="column"><h4>{playerShuffle[0]}</h4> VS <h4>{playerShuffle[1]}</h4></div>
                                : null}
                            {team.length >= 4 ?
                                <div className="column"><h4>{playerShuffle[2]}</h4> VS <h4>{playerShuffle[3]}</h4></div>
                                : null}
                            {team.length >= 6 ?
                                <div className="column"><h4>{playerShuffle[4]}</h4> VS <h4>{playerShuffle[5]}</h4></div>
                                : null}
                            {team.length >= 8 ?
                                <div className="column"><h4>{playerShuffle[6]}</h4> VS <h4>{playerShuffle[7]}</h4></div>
                                : null}
                        </div>
                        <div className="ui equal width grid">
                            {team.length >= 10 ?
                                <div className="column"><h4>{playerShuffle[8]}</h4> VS <h4>{playerShuffle[9]}</h4></div>
                                : null}
                            {team.length >= 12 ?
                                <div className="column"><h4>{playerShuffle[10]}</h4> VS <h4>{playerShuffle[11]}</h4></div>
                                : null}
                            {team.length >= 14 ?
                                <div className="column"><h4>{playerShuffle[12]}</h4> VS <h4>{playerShuffle[13]}</h4></div>
                                : null}
                            {team.length >= 16 ?
                                <div className="column"><h4>{playerShuffle[13]}</h4> VS <h4>{playerShuffle[14]}</h4></div>
                                : null}
                        </div>
                    </div>
                    :
                    <div className="card tournament-div">
                        <div className="column"><h1>{suddenDeathTeam[0]} VS {suddenDeathTeam[1]}</h1></div>
                    </div>

                }

            </>
        )
    }
}

export default TournamentPage;