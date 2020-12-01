import { FETCH_USER, FETCH_ERROR } from "../actions/types";

export function user(state, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        loading: false,
        auth: action.payload || false,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: true,
        auth: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
}
