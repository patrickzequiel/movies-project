import { combineReducers } from "redux";
import { moviesReducer } from "./index";

const reducers = combineReducers({
  movies: moviesReducer,
});

export default reducers;

//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
