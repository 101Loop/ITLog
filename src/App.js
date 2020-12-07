import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import "./App.css";

const App = () => {
  useEffect(() => {
    // To Initilaize Materialise in React
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <Logs />
    </Fragment>
  );
};

export default App;
