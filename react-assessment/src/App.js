import {SearchBar} from './Components/SearchBar/SearchBar';
import {SearchResults} from './Components/SearchResults/SearchResults';
import {Playlist} from './Components/Playlist/Playlist';
import './App.css';
import { render } from 'react-dom';


function App() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">       
          <SearchBar />
          <div class="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
      
    )
  }
export default App;
