import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { init, events, window } from "@neutralinojs/lib";

init();

events.on("ready", async () => {
  // await window.setSize({
  //   width: 600,
  //   height: 400,
  //   maxWidth: 600,
  //   maxHeight: 400,
  // });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
