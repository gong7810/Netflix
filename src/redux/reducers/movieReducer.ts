import { FETCH_MOVIES, GET_MOVIES } from "../constance";

const initialState = {
  popularMovieList: [] as any,
  topRatedMovieList: [] as any,
  upcomingMovieList: [] as any,
  movie: {} as any,
};

export const movieReducer = (state = initialState, action: any) => {
  const { type, response } = action;
  console.log("결과값 : ", response);
  switch (type) {
    case FETCH_MOVIES:
      console.warn("영화조회", action);
      return { ...state, popularMovieList: response.results };
    default:
      return { ...state };
  }
};
