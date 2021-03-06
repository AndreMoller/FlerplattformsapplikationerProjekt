import React from 'react'
import { useEffect } from 'react'
import './player.css'
import { searchID } from '../services/api-stats.js'
var dateFormat = require("dateformat");

//represents a single user in the search results
export const Player = (props) => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [playerInfo, setPlayerInfo] = React.useState([]);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const expandPlayer = () => {
        if (collapsed) {
            searchID(props.data.account_id).then(function (apidata) {
                setPlayerInfo(apidata.data);
            });
        }
        collapsed ? setCollapsed(false) : setCollapsed(true);
    }

    const favoritePlayer = () => {
        isFavorite ? setIsFavorite(false) : setIsFavorite(true)
        if (!isFavorite) {
            let favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites.push(props.data.account_id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            let favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites.splice(favorites.indexOf(props.data.account_id), 1);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }

    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites.includes(props.data.account_id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [isFavorite]);



    return (
        <div className="container" id="searchResults">
            <div className="row">
                <div className="col-4">
                    <img src={props.data.avatarfull} className="img-fluid" alt="useravatar" />
                </div>
                <div className="col-4">
                    <p className="playername"> {props.data.personaname} </p>
                    <p className="lastloggon">Last match: {dateFormat(props.data.last_match_time, "dd/mm-yy")} </p>
                </div>
                <div className="col-2">
                    <i onClick={expandPlayer} className={collapsed ? "arrow down" : "arrow up"}></i>
                </div>
                <div className="col-2">
                    <i id="star" onClick={favoritePlayer} className={isFavorite ? "fas fa-star " : "far fa-star "} />
                </div>
                <div className={collapsed ? "collapsed" : "expanded"}>
                    <a href={playerInfo.profile !== undefined ? playerInfo.profile.profileurl : ""}>
                        <i className="fab fa-steam fa-3x"></i>
                    </a>
                    <p>Last login: {playerInfo.profile !== undefined ? dateFormat(playerInfo.profile.last_login, "dd/mm-yy") : ""}</p>
                    <p>Country code: {playerInfo.profile !== undefined ? playerInfo.profile.loccountrycode : ""}</p>
                    <p>MMR: {playerInfo.mmr_estimate !== undefined ? JSON.stringify(playerInfo.mmr_estimate.estimate) : ""}</p>
                    <i className={playerInfo.profile !== undefined && playerInfo.profile.plus ? "fas fa-hand-holding-usd green" : "fas fa-hand-holding-usd"}></i>
                </div>
            </div>
        </div>
    )
}

export default Player