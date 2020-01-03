import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
=======
import App from "./components/App";

>>>>>>> nav changes
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
