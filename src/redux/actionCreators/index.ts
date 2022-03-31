import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MOVIES_PENDING,
    });

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=96b3ec21b4b72970380911f8180d7083&language=en-US&page=1`
      );

      dispatch({
        type: ActionType.GET_MOVIES_FULFILLED,
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };
};

export const getMovie = (movie_id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MOVIE_PENDING,
    });

    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=96b3ec21b4b72970380911f8180d7083&language=en-US`
      );

      // const array = [];
      // array.push(data);
      // console.log("ok -> dispatch starting");
      dispatch({
        type: ActionType.GET_MOVIE_FULFILLED,
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_MOVIE_FAILED,
        payload: err.message,
      });
    }
  };
};
