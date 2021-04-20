
import React from "react";
import ReactDom from "react-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Metronome from "./Metronome/Metronome";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDom.render(<Metronome  />, document.querySelector("root"));
