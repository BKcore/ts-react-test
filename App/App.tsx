/// <reference path="../typings/tsd.d.ts" />

/* tslint:disable */
import React = require("react");
import ReactRouter = require("react-router");
let {Link, IndexLink} = ReactRouter;
/* tslint:enable */

/* tslint:disable:no-any */
const styles: any = require("./App.module.less");
/* tslint:enable:no-any */

interface IAppProps extends React.Props<App> {
  testProp?: string;
};

export default class App extends React.Component<IAppProps, {}> {
  render(): React.ReactElement<{}> {
    return <div className={styles.App}>
      <h1>Test App Header</h1>
      <ul>
        <li><IndexLink to="/" activeClassName={styles.active}>Home</IndexLink></li>
        <li><Link to="/test" activeClassName={styles.active}>Test</Link></li>
      </ul>
      <div>{this.props.children}</div>
    </div>;
  }

  componentDidMount(): void {
    console.log("LOADED");
  }
};
