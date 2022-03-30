import { GET_MOVIES, MOVIES_ERROR } from "../types";
import axios from "axios";

export const getMovies = () => async (dispatch) => {
  try {
     axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=96b3ec21b4b72970380911f8180d7083&language=en-US&page=1`)
      .then((res) => {
       return dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      });
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e),
    });
  }
};
