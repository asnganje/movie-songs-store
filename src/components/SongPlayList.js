import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

export default function MoviePlayList() {
    const dispatch = useDispatch()

    const songPlayList = useSelector((state)=> {
            return state.songs
    });

    const handleSongAdd = (song)=> {
        dispatch(addSong(song))
 

    }

    const handleSongRemove = (song) => {
        dispatch(removeSong(song))
    }

    const renderedSongs = songPlayList.map((movie)=> {
        return (
            <li key={movie}>
                {movie}
                <button className="button is-danger"
                onClick={()=>handleSongRemove(movie)}
                >
                    X
                </button>
            </li>
        )
    })

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song PlayList</h3>
                <div className="buttons">
                    <button 
                    onClick={()=>handleSongAdd(createRandomSong)}
                    className="button is-link">
                        + Add Song to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    )
}