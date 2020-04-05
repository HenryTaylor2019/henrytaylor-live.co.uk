import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class RoundTwo extends Component {
    static contextType = PlayerContext;

    render() {
        const { handleSubmitWinners, handleroundTwoPlayers, roundOneWinners, handleRoundTwoGame, roundTwoTeam, team } = this.context;

        return (
            <>
                {team.length > 0 ?
                    <div>
                        <div className="main-form">

                            <form>
                                <label>Submit Winners</label>
                                <input type="text" value={roundOneWinners} onChange={handleSubmitWinners} />
                                <button onClick={handleroundTwoPlayers}>Submit Player</button>
                                <button onClick={handleRoundTwoGame}>Make Game</button>
                            </form>
                        </div>

                        <div className="ui equal width grid">
                            {/* Conditionals used to only display matches per number of players */}
                            {roundTwoTeam.length >= 4 ?
                                <div className="column"><h4>{roundTwoTeam[0]}</h4> VS <h4>{roundTwoTeam[1]}</h4></div>
                                : null}
                            {roundTwoTeam.length >= 4 ?
                                <div className="column"><h4>{roundTwoTeam[2]}</h4> VS <h4>{roundTwoTeam[3]}</h4></div>
                                : null}
                            {roundTwoTeam.length >= 6 ?
                                <div className="column"><h4>{roundTwoTeam[4]}</h4> VS <h4>{roundTwoTeam[5]}</h4></div>
                                : null}
                            {roundTwoTeam.length >= 8 ?
                                <div className="column"><h4>{roundTwoTeam[6]}</h4> VS <h4>{roundTwoTeam[7]}</h4></div>
                                : null}
                        </div>
                    </div>

                    : null}
            </>
        )
    }
}

export default RoundTwo;