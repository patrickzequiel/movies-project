import { Action, ActionType } from "../actionTypes/index";

export interface Movies {
  postId: number;
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genres: string[];
  overview: string;
  production_companies: string[];
}

export interface Movie {
  postId: number;
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  genres: string[];
  overview: string;
  production_companies: string[];
}

interface State {
  movies: Movies[];
  movie: Movie[];
  error: string | null;
  loading: boolean;
}

interface StateMovie {
  movie: Movie;
  error: string | null;
  loading: boolean;
}

const initialState = {
  movies: [],
  movie: null,
  loading: false,
  error: null,
};

export const moviesReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.GET_MOVIES_PENDING:
      return {
        loading: true,
        movies: [],
        movie: [],
        error: null,
      };
    case ActionType.GET_MOVIES_FULFILLED:
      return {
        loading: false,
        movies: action.payload,
        movie: action.payload,
        error: null,
      };
    case ActionType.GET_MOVIES_FAILED:
      return {
        loading: false,
        error: action.payload,
        movies: [],
        movie: [],
      };
    default:
      return state;
  }
};

export const movieReducer = (
  state: StateMovie = initialState,
  action: Action
): StateMovie => {
  switch (action.type) {
    case ActionType.GET_MOVIE_PENDING:
      return {
        loading: true,
        movie: null,
        error: null,
      };
    case ActionType.GET_MOVIE_FULFILLED:
      return {
        loading: false,
        movie: action.payload,
        error: null,
      };
    case ActionType.GET_MOVIE_FAILED:
      return {
        loading: false,
        error: action.payload,
        movie: null,
      };
    default:
      return state;
  }
};
