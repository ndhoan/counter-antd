import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { init, os, events } from "@neutralinojs/lib";

init();

events.on("ready", () => {
  os.showMessageBox("Welcome", "Hello Neutralinojs");
});

console.log(window);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
