import { Action, ActionType } from "../actionTypes/index";

export interface Movies {
  postId: number;
  id: number;
  title: string;
  poster_path: string;
}

interface State {
  movies: Movies[];
  error: string | null;
  loading: boolean;
}

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const moviesReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.GET_MOVIES_PENDINGG:
      return {
        loading: true,
        movies: [],
        error: null,
      };
    case ActionType.GET_MOVIES_FULFILLED:
      return {
        loading: false,
        movies: action.payload,
        error: null,
      };
    case ActionType.GET_MOVIES_FAILED:
      return {
        loading: false,
        error: action.payload,
        movies: [],
      };
    default:
      return state;
  }
};
