import React from 'react';
import './TrackList';
class Playlist extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultValue="New Playlist" />
                /*< Add a TrackList component />*/
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
export default Playlist;