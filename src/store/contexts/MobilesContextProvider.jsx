import { useMemo, useReducer } from "react";
import mobilesReducer from "../reducers/mobilesReducer";
import MobilesContext from "./MobilesContext";

const initialState = {
  count: 0,
};

const MobilesContextProvider = ({ children }) => {
  const [mobiles, dispatch] = useReducer(mobilesReducer, initialState);

  const mobilesContextValue = useMemo(() => ({ mobiles, dispatch }), [mobiles]);

  return (
    <MobilesContext.Provider value={mobilesContextValue}>
      {children}
    </MobilesContext.Provider>
  );
};

export default MobilesContextProvider;
