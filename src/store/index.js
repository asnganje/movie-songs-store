import { configureStore} from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";


const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
})


export { store, reset, addSong, removeSong, addMovie, removeMovie };

// console.log(songSlice.actions)

// const startingState = store.getState();
// console.log(JSON.stringify(startingState))

// store.dispatch(
//     songSlice.actions.addSong('Some song!')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState))