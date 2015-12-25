/// <reference path="../typings/tsd.d.ts" />

/* tslint:disable */
import React = require("react");
const injectTapEventPlugin = require("react-tap-event-plugin");
const createHistory = require("history/lib/createHashHistory");
import ReactRouter = require("react-router");
let {Router, Route, IndexRoute} = ReactRouter;
/* tslint:enable */
import ReactDom = require("react-dom");
import App from "./App";

import Home from "./Components/Home/Home";
import Test from "./Components/Test/Test";

injectTapEventPlugin();

ReactDom.render(
  <Router history={createHistory({queryKey: false})}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="test" component={Test} />
    </Route>
  </Router>
, document.getElementById("root"));
