import React, { useContext } from "react";
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";
import Navigation from "../components/navigation/Nav";

// global styling
import GlobalStyle from "../components/style-utils/GlobalStyle";

function App() {
  const actions = useActions();

  return (
    <ActionsContext.Provider value={actions}>
      <GlobalStyle />
      <Navigation />
    </ActionsContext.Provider>
  );
}

export default App;