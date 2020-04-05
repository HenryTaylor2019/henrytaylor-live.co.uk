import React from 'react';

const Header = () => {

    return (
        <div className="header">
            <div>
                <img className="img-header" src="https://freesvg.org/img/Paddle-1294900.png" alt="App Logo"/>
            </div>
            
            <h1>Ping Pong Matchmaker</h1>

            <section>
                <p>Choose up to 16 players and let Ping Pong Matchmaker generate your teams</p>
            </section>

        </div>
    )
}

export default Header;