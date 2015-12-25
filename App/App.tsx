/// <reference path="../typings/tsd.d.ts" />

/* tslint:disable */
import React = require("react");
import ReactRouter = require("react-router");
const {Link, IndexLink} = ReactRouter;
const AppCanvas = require('material-ui/lib/app-canvas');
const ClearFix = require('material-ui/lib/clearfix');
const AppBar = require('material-ui/lib/app-bar');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const MenuItem = require('material-ui/lib/menus/menu-item');

const globalStyles: any = require("./Global/Styles/main.less");
const styles: any = require("./App.module.less");
/* tslint:enable */

// Material-UI style overrides
const contentStyle: {} = {
  padding: 64
};
const tabsStyle: {} = {
  marginTop: -8
};
const tabStyle: {} = {
  height: 64,
  paddingLeft: 30,
  paddingRight: 30
};

// @class App
interface IAppProps extends React.Props<App> {
  history: History;
  location: Location;
};
export default class App extends React.Component<IAppProps, {}> {

  render(): React.ReactElement<{}> {
    return <AppCanvas>
      <AppBar
        title="Test App"
        iconElementRight={
        <Tabs style={tabsStyle} value={this.props.location.pathname}
          onChange={(value: string, e: {}, tab: __MaterialUI.Tabs.Tab) => {
          this.transitionTo(tab.props.value);
        }}>
          <Tab label="Home" value="/" style={tabStyle}/>
          <Tab label="Test" value="/test" style={tabStyle}/>
        </Tabs>
      } />
      <ClearFix style={contentStyle}>{this.props.children}</ClearFix>
    </AppCanvas>;
  }

  componentDidMount(): void {
    console.log("HAY WE LOADED");
  }

  private transitionTo(route: string): void {
    this.props.history.pushState(null, route);
  }
};
