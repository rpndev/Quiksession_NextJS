import React, { useReducer, useContext } from "react";
export const StudioFormContext = React.createContext();
function formReducer(state, action) {
  switch (action.type) {
    case "ADD_STUDIO":
      return { ...state, studioInfo: action.payload };
    case "ADD_ROOM":
      return { ...state, roomInfo: action.payload };
    case "ADD_SERVICE":
      return { ...state, serviceInfo: action.payload };
    case "ADD_EQUIP":
      return { ...state, equipInfo: action.payload };
    case "ADD_ENGINEER":
      return { ...state, engineerInfo: action.payload };
    case "SUBMIT":
      return { ...state, isSubmit: true };
    default:
      throw new Error();
  }
}

export const StudioFormProvider = function ({ children, initialState }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <StudioFormContext.Provider value={{ state, dispatch }}>
      {children}
    </StudioFormContext.Provider>
  );
};

export function useStudioFormState() {
  const context = useContext(StudioFormContext);

  if (context === undefined) {
    throw new Error(
      "useStudioFormState must be used within a StudioFormProvider"
    );
  }

  return context;
}
