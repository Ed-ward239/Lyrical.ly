import React, { useState } from "react";
import "./SearchMenu.css";
import { FaSpotify } from "react-icons/fa";

export default function SearchMenu() {
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Perform search logic with the searchQuery
    console.log(searchQuery);
  };
  const placeholder = 'Search: songs, artists, or albums';
  return (
    <div className="searchContainer">
      <input className="searchBox"
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="buttonsSection">
        <button className="searchPageBtn" onClick={handleSearchButtonClick}>Surprise ME!</button>
        <button className="searchPageBtn connectSpotifyBtn">Connect<FaSpotify className="SearchPageSpotifyIcon" /> Spotify</button>
      </div>
    </div>
  );
}
