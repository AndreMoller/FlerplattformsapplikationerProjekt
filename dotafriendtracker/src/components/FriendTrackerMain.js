import React from 'react'
import { useEffect } from 'react'
import PlayerWrapper from './PlayerWrapper.js'
import searchPlayer from '../services/api-stats.js'
import { searchID } from '../services/api-stats.js'
import './player.css'

//The main page, contains the search form and is parent component for the search results 
const FriendTrackerMain = () => {

    const [searchResults, setSearchResults] = React.useState([]);
    const [userInput, setUserInput] = React.useState("");


    const search = (e) => {
        if (e.keyCode === 13 && userInput.length > 2) {
            searchPlayer(userInput).then(function (data) {
                setSearchResults(data.data);
            });
        } else if (e.keyCode === 13) {
            alert("Search string must be at least 3 characters long");
        }
    }

    const searchButton = (e) => {
        if (userInput.length > 2) {
            searchPlayer(userInput).then(function (data) {
                setSearchResults(data.data);
            });
        } else {
            alert("Search string must be at least 3 characters long");
        }
    }

    const showFriends = (e) => {
        setSearchResults([]);
        if (localStorage.getItem("favorites").length < 3) {
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
            <div className="logoandsearch">
                <img className="d-block mx-auto img-fluid" src="https://icon-library.com/images/dota-2-icon/dota-2-icon-3.jpg" alt="dota2logo"></img>
                <h2>Friend Tracker</h2>
                <div className="row" id="searchContainer">
                    <label htmlFor="">Player Search</label>
                    <input type="text" className="form-control" id="searchField" aria-describedby="searchString" placeholder="Player name" onKeyUp={search} onChange={userInputChange}></input>
                    <button type="button" className="btn btn-danger" onClick={showFriends}>Show friends</button>
                    <button type="button" className="btn btn-light" onClick={searchButton}>Search</button>
                </div>
            </div>
            <PlayerWrapper data={searchResults} />
        </div>
    )
}

export default FriendTrackerMain
