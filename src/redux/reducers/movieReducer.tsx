const initialState = {
  movieList: [] as any,
  movie: {} as any,
};

function movieReducer(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIE":
      return { ...state, movieList: payload.movieList };
    case "GET_MOVIE_DETAIL":
      return { ...state, movie: payload.movie };
    default:
      return { ...state };
  }
}

export default movieReducer;
