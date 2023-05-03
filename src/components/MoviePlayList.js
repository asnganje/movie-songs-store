import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../store";

export default function MoviePlayList() {

    const dispatch = useDispatch()

    const moviePlayList = useSelector((state)=> {
        return state.movies
    });

    const handleMovieAdd = (movie)=> {
        // const action = addMovie(movie)
        // dispatch(action)
        dispatch(addMovie(movie))

    }

    const handleMovieRemove = (movie) => {
         // const action = removeMovie(movie)
        // dispatch(action)
        dispatch(removeMovie(movie))
    }

    const renderedMovies = moviePlayList.map((movie)=> {
        return (
            <li key={movie}>
                {movie}
                <button className="button is-danger"
                onClick={()=>handleMovieRemove(movie)}
                >
                    X
                </button>
            </li>
        )
    })

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Movie PlayList</h3>
                <div className="buttons">
                    <button 
                    onClick={()=>handleMovieAdd(createRandomMovie)}
                    className="button is-link">
                        + Add Movie to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedMovies}</ul>
        </div>
    )
}