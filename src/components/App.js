import React, { useContext } from 'react';
import ActionsContext from "../context/Actions";
import useActions from "../store/useActions";

function App() {
   const actions = useActions();

   return (
      <ActionsContext.Provider value={actions}>
         <div className="App">

         </div>
      </ActionsContext.Provider>
   );
}

export default App;