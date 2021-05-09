import React from 'react'
import {useEffect} from 'react'
import PlayerWrapper from './PlayerWrapper.js'
import searchPlayer from '../services/api-stats.js'
import {searchID} from '../services/api-stats.js'
import './player.css'

const FriendTrackerMain = () => {

    const [searchResults, setSearchResults] = React.useState([]);
    const [userInput, setUserInput] = React.useState("");


    const search = (e) => {
        if (e.keyCode === 13) {
            searchPlayer(userInput).then(function (data) {
                setSearchResults(data.data);
            });
        }
    }

    const searchButton = (e) => {
        
            searchPlayer(userInput).then(function (data) {
                setSearchResults(data.data);
            });
        
    }

    const showFriends = (e) => {
        setSearchResults([]);
        if(localStorage.getItem("favorites").length < 3){
            alert("You have no friends");
        } else {
            let friends = JSON.parse(localStorage.getItem("favorites"));
            friends.forEach((friend) => {
                searchID(friend).then(function (data) {
                    setSearchResults(prevState => [...prevState, data.data.profile]);
                });
            });
        }
    }

    const userInputChange = (e) => {
        setUserInput(e.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem("favorites") == null) {
            localStorage.setItem("favorites", "[]");
        }
    }, [])
    
    return (
        <div id="container">
            <h1 id="pageTitle" >Dota Friend Tracker</h1>
            <div class="row" id="searchContainer">
                <label htmlFor="">Player Search</label>
                <input type="text" className="form-control" id="searchField" aria-describedby="searchString" placeholder="Player name" onKeyUp={search} onChange={userInputChange}></input>
                <button type="button" class="btn btn-danger" onClick={searchButton}>Search</button>
                <button type="button" class="btn btn-danger" onClick={showFriends}>Show friends</button>
            </div>



            <PlayerWrapper data={searchResults} />
        </div>
    )
}

export default FriendTrackerMain
