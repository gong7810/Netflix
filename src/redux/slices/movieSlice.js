import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovieList: [],
  movie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.popularMovieList = action.payload.popularMovieList;
    },
  },
});

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;
