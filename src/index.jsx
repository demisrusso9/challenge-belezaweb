import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.scss";

const Strict = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(<Strict />, document.getElementById("root"));
