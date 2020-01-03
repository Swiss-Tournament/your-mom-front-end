import React, { useContext } from "react";
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";

import LandingPage from "../components/landingpage/LandingPage";

function App() {
  const actions = useActions();

  return (
    <ActionsContext.Provider value={actions}>
      <div className='App'>
        <h1>Hello You</h1>
        <LandingPage />
      </div>
    </ActionsContext.Provider>
  );
}

export default App;
