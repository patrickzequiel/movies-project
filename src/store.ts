import { createStore, applyMiddleware, Action } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import { useDispatch } from "react-redux";

const initalState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
