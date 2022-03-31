import { Movie, Movies } from "../reducers/index";

export enum ActionType {
  GET_MOVIES_PENDING = "GET_MOVIES_PENDING",
  GET_MOVIES_FULFILLED = "GET_MOVIES_FULFILLED",
  GET_MOVIES_FAILED = "GET_MOVIES_FAILED",
  GET_MOVIE_PENDING = "GET_MOVIE_PENDING",
  GET_MOVIE_FULFILLED = "GET_MOVIE_FULFILLED",
  GET_MOVIE_FAILED = "GET_MOVIE_FAILED",
}

interface actionPending {
  type: ActionType.GET_MOVIES_PENDING | ActionType.GET_MOVIE_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_MOVIES_FULFILLED;
  payload: Movies[];
}

interface movieSuccess {
  type: ActionType.GET_MOVIE_FULFILLED;
  payload: any;
}

interface actionFail {
  type: ActionType.GET_MOVIES_FAILED | ActionType.GET_MOVIE_FAILED;
  payload: string;
}

export type Action = actionPending | actionSuccess | movieSuccess | actionFail;
