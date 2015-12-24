/// <reference path="../typings/tsd.d.ts" />

/* tslint:disable */
import React = require("react");
import ReactRouter = require("react-router");
let {Router, Route, IndexRoute} = ReactRouter;
/* tslint:enable */
import ReactDom = require("react-dom");
import App from "./App";

import Home from "./Components/Home/Home";
import Test from "./Components/Test/Test";

ReactDom.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="test" component={Test} />
    </Route>
  </Router>
, document.getElementById("root"));
