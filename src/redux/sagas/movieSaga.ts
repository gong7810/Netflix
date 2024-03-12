import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import { FETCH_MOVIES, GET_MOVIES } from "../constance";
import { AxiosResponse } from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

interface MovieData {}

function* getMovies(data: any) {
  console.warn("movieSaga is called", data);
  try {
    let url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&?language=en-US&page=1`;

    let response: Response = yield call(fetch, url);
    console.warn("reponse : ", response);
    response = yield response.json();
    console.warn("json : ", response);
    yield put({
      type: FETCH_MOVIES,
      response,
    });
  } catch (err) {
    console.error(err);
  }
}

function* movieSaga() {
  yield takeLatest(GET_MOVIES, getMovies);
}

export default movieSaga;
