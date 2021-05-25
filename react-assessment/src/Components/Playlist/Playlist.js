import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList'

export function Playlist(props){
    return(
        <div class="Playlist">
            <input value="New Playlist"/>
            <TrackList />
            <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
};