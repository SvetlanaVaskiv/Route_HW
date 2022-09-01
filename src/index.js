import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { MovieStore } from "./store/MovieStore";
import PostersDetailsStore from "./store/PostersDetailsStore";
import { TrailersStore } from "./store/TrailersStore";
export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        movies: new MovieStore(),
        trailers: new TrailersStore(),
        details: new PostersDetailsStore(),
      }}
    >
      <Router>
        <App />
      </Router>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
