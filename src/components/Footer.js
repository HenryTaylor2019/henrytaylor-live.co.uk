import React, { Component } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

class Footer extends Component {
    static contextType = PlayerContext;

    

    render() {
        const{handleReset, handleShuffle, team } = this.context;
        return (
            <div className="footer">
                {team.length > 0 ?
                    <div>
                        <div className="end-buttons">
                            <button className="ui secondary button" onClick={handleShuffle}>Shuffle Players</button>

                            <button className="ui secondary button" onClick={handleReset}>New Tournament</button>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}
export default Footer;