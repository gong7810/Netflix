import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions/movieAction";
import { AppDispatch, RootState } from "../redux/store";

const HomePage = () => {
  const dispatch = useDispatch() as AppDispatch;
  const popularMovieList: any = useSelector(
    (state: RootState) => state.movieReducer.popularMovieList
  );

  const test = () => {
    console.log(popularMovieList);
  };

  return (
    <div>
      홈페이지
      <button onClick={() => dispatch(getMovies("hello"))}>하하하</button>
      <button onClick={() => test()}>데이터</button>
      {popularMovieList?.map((item: any, key: any) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
};

export default HomePage;
