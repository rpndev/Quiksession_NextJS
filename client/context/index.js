import { useMemo, useReducer, createContext } from "react";
import { user } from "../reducers/user";

// initial state
const initialState = {
  user: {
    loading: true,
    error: "",
    auth: { data: { credit: 0 } },
  },
  // another reducer
  //...
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(user), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
