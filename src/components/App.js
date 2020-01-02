import React, { useContext } from 'react';
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";
import EventListings from "../components/events/EventListings"

function App() {
   const actions = useActions();

   return (
      <ActionsContext.Provider value={actions}>
         <div className="App">
            <h1>Hello You</h1>
         </div>
      </ActionsContext.Provider>
   );
}

export default App;