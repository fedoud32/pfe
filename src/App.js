import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RootContainer from "./containers/RootContainer";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
