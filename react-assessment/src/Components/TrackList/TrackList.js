import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track'

export function TrackList(props){
    return(
        <div className="TrackList">
            {/*<!-- You will add a map method that renders a set of Track components  -->*/
            (props.tracks).map((track) => {
                return (<Track
                    name={track.anme}
                    artist={track.artist}
                    album={track.album}
                    key={track.id}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    isRemoval={props.isRemoval}/>)
            })}

            <Track />
        </div>
    )
};