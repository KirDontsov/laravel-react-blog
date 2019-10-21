require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, browserHistory } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
    <Router history={browserHistory}>
        <App />
    </Router>,
    document.getElementById("root")
);
