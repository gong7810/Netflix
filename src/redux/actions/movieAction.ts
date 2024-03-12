import api from "../api";
import { GET_MOVIES } from "../constance";

export const getMovies = (data: any) => {
  console.warn("Action", data);
  return {
    type: GET_MOVIES,
    data,
  };

  // 이 방식 조회 x
  // await fetch(url)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     return {
  //       type: GET_MOVIES,
  //       data,
  //     };
  //   });
};

// export const movieAction = { getMovies };
export type actionType = ReturnType<typeof getMovies>;
