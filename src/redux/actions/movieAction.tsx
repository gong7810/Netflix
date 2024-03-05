function getMovies(searchQuery: string) {
  return async (dispatch: any, getState: any) => {
    let url = `https://my-json-server.typicode.com/gong7810/hnm-shop/products?q=${searchQuery}`;

    await fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (movieList) {
        dispatch({
          type: "GET_MOVIE",
          payload: { movieList },
        });
      });
  };
}

export const movieAction = { getMovies };
