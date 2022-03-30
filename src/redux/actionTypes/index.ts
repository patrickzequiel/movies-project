import { Movies } from "../reducers/index";

export enum ActionType {
  GET_MOVIES_PENDINGG = "GET_MOVIES_PENDING",
  GET_MOVIES_FULFILLED = "GET_MOVIES_FULFILLED",
  GET_MOVIES_FAILED = "GET_MOVIES_FAILED",
}

interface actionPending {
  type: ActionType.GET_MOVIES_PENDINGG;
}

interface actionSuccess {
  type: ActionType.GET_MOVIES_FULFILLED;
  payload: Movies[];
}

interface actionFail {
  type: ActionType.GET_MOVIES_FAILED;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
