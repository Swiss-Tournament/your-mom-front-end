import React, { useContext } from "react";
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";

import LandingPage from "../components/landingpage/LandingPage";

// global styling
import GlobalStyle from "../components/style-utils/GlobalStyle";

function App() {
  const actions = useActions();

  return (
    <ActionsContext.Provider value={actions}>
      <div className='App'>
        <GlobalStyle />
        <LandingPage />
      </div>
    </ActionsContext.Provider>
  );
}

export default App;
