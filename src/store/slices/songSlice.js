import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state,action) {
            state.push(action.payload)
        },
        removeSong(state,action){
            const index = state.indexOf(action.payload)
            state.splice(index,1)

        }
    },
    
    extraReducers(builder) {
        builder.addCase(reset, (state,action)=>{
            return [];
        })
    }
})

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer =  songSlice.reducer;