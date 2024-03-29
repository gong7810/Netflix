import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NavBar from "./component/NavBar";

//1. 홈페이지, movie페이지, movie상세페이지
//2. 홈페이지에서 배너를 볼 수 있다.
//3. 3가지 섹션의 영화를 볼 수 있다. (popular, top rated, upcoming)

//4. 각 영화에 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부를 볼 수 있다.
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.
//6. 영화 상세페이지에서 영화에 대한 디테일한 정보를 볼 수 있다.(포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등등)
//7. trailer(예고편)를 누르면 trailer를 볼 수 있다.
//8. 영화에 리뷰도 볼 수 있다.
//9. 관련된 영화도 볼 수 있다.

//10. 영화검색을 할 수 있다.
//11. 영화 정렬할 수 있다.
//12. 영화를 필터링할 수 있다.

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
