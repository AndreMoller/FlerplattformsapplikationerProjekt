import React from 'react';
import Player from './Player.js';
import "./player.css"

//Container for player components
const PlayerWrapper = (props) => {
    return (
        <div className="container">
            {props.data.map((player) => (
                <Player data={player} key={player.account_id}/>
            ))}
        </div>
    )
}

export default PlayerWrapper