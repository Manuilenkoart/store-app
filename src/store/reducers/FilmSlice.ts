import { createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../../models/IFilm";

export interface FilmsState {
    films: IFilm[];
    isLoading: boolean;
    error: string;
}

const initialState: FilmsState = {
    films: [],
    isLoading: false,
    error: '',
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers:{},
    extraReducers:{}
})

export default filmsSlice.reducer