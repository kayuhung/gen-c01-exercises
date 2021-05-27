import { render } from '@testing-library/react';
import React,{useState} from 'react';
import './Track.css';

export function Track(props){

  const [Track, setTrack] = useState();
  const addTrack = (event) =>{
    props.onAdd(props.trak);
  }

  const removeTrack = (event)=>{
    props.onRemove(props.track);
  }

  const renderAction = () => {
    if(props.isRemoval) {
      return <button className='Track-action' onClick={removeTrack}>-</button>
    }
    return <button className='Track-action' onClick={addTrack}>+</button>
  }
    return(
        <div className="Track">
          <div className="Track-information">
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
          </div>
          {render.renderAction()}
        </div>
    )
};