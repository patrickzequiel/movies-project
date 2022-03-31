import { combineReducers } from "redux";
import { movieReducer, moviesReducer } from "./index";

const reducers = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});

export default reducers;

//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
