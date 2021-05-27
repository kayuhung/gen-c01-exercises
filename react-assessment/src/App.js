import {SearchBar} from './Components/SearchBar/SearchBar';
import {SearchResults} from './Components/SearchResults/SearchResults';
import {Playlist} from './Components/Playlist/Playlist';
import './App.css';
import React, { useState } from 'react';
import {TrackList} from './Components/TrackList/TrackList'

function App() {

const[searchResults, setSearchResults] = useState([]);
const[playListName, setPlayListName] = useState('myPlayList');
const[playListTracks, setPlayListTrack] = useState([
  {
    name: 'trackName',
    artist: 'trackArtist',
    album: 'trackAlbum',
    id: '11111'
  }
])

let addTrack = (track) => {
  if(playListTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  } else {
    setPlayListTrack(track, ...playListTracks)
  }
}

let removeTrack =() => {
  
}

    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">       
          <SearchBar />
          <div class="App-playlist">
            <SearchResults searchResults={searchResults} onAdd={addTrack}/>
            <Playlist name={playListName} tracks={playListTracks} onRemove={removeTrack}/>
            <TrackList searchResults={searchResults}/>
          </div>
        </div>
      </div>
      
    )
  }
export default App;
