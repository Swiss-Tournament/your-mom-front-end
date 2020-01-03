import React, { useContext } from "react";
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";

import LandingPage from "../components/landingpage/LandingPage";

// import styled from "styled-components";
// import {
//   bodyFont,
//   colors,
//   headerFont,
//   MIN_WIDTH,
//   MAX_WIDTH
// } from "../components/style-utils/variables";

function App() {
  const actions = useActions();

  return (
    <ActionsContext.Provider value={actions}>
      <div className='App'>
        <LandingPage />
      </div>
    </ActionsContext.Provider>
  );
}

export default App;
