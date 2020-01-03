import React, { useContext } from 'react';
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";
import Navigation from "../components/navigation/Nav";

function App() {
   const actions = useActions();

   return (
      <ActionsContext.Provider value={actions}>
        <Navigation />
      </ActionsContext.Provider>
   );
}

export default App;