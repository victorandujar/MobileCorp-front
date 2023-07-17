import MobilesContext from "../store/contexts/MobilesContext";

const MockContextProvider = ({ children, mockStore }) => {
  return (
    <MobilesContext.Provider value={mockStore}>
      {children}
    </MobilesContext.Provider>
  );
};

export default MockContextProvider;
