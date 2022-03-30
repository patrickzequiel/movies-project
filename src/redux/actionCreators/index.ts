import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getMovies = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MOVIES_PENDINGG,
    });

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=96b3ec21b4b72970380911f8180d7083&language=en-US&page=1`
      );

      console.log(data);
      dispatch({
        type: ActionType.GET_MOVIES_FULFILLED,
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ActionType.GET_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };
};
