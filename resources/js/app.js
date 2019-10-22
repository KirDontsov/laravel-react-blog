require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, browserHistory } from "react-router-dom";
import Index from "./components/Index";

ReactDOM.render(
    <Router history={browserHistory}>
        <Index />
    </Router>,
    document.getElementById("root")
);
