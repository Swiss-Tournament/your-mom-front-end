import React, { useContext } from 'react';
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";
import EventRules from './events/eventpage/event-page-components/EventRules.js';

function App() {
   const actions = useActions();

   return (
      <ActionsContext.Provider value={actions}>
         <div className="App">
            <h1>Hello You</h1>
         </div>
         <EventRules />
      </ActionsContext.Provider>
      
   );
}

export default App;
