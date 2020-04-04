import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class RoundTwo extends Component {
    static contextType = PlayerContext;

    render() {
        const { roundOneWinners } = this.context;

        return (
            <>
                <div >
                    <div className="ui equal width grid">
                        {/* Conditionals used to only display matches per number of players */}
                        {roundOneWinners.length >= 4 ?
                            <div className="column"><h4>{roundOneWinners[0]}</h4> VS <h4>{roundOneWinners[1]}</h4></div>
                            : null}
                        {roundOneWinners.length >= 4 ?
                            <div className="column"><h4>{roundOneWinners[2]}</h4> VS <h4>{roundOneWinners[3]}</h4></div>
                            : null}
                        {roundOneWinners.length >= 6 ?
                            <div className="column"><h4>{roundOneWinners[4]}</h4> VS <h4>{roundOneWinners[5]}</h4></div>
                            : null}
                        {roundOneWinners.length >= 8 ?
                            <div className="column"><h4>{roundOneWinners[6]}</h4> VS <h4>{roundOneWinners[7]}</h4></div>
                            : null}
                    </div>
                </div>

            </>
        )
    }
}

export default RoundTwo;