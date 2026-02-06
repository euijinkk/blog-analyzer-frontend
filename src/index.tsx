import './index.css';
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { initAmplitude } from "./analytics/amplitude";

initAmplitude();
render(<App />, document.getElementById("root"));