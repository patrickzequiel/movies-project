import { GET_MOVIES } from "../types";

const initialState = {
  movies: [],
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
