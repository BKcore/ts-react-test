/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");
import Avatar = require("material-ui/lib/avatar");
import List = require("material-ui/lib/lists/list");
import ListItem = require("material-ui/lib/lists/list-item");

/* tslint:disable:no-any */
const styles: any = require("./Test.module.less");
/* tslint:enable:no-any */

interface IState {
  testVar?: string;
}
interface IProps {
  testProp?: string;
}

export default class Test extends React.Component<IProps, IState> {

  private get: () => void = () => {
    // Get: this.setState({...});
  };

  constructor() {
    super();
    this.state = {};
  }

  render(): React.ReactElement<{}> {
    return <div className={styles.Test}>
      <h1>Test Component</h1>
      <p>Hay more stuff.</p>
      <List subheader="Folders" insetSubheader={true}>
        <ListItem
          leftAvatar={<Avatar>P</Avatar>}
          primaryText="Photos"
          secondaryText="Jan 9, 2014" />
        <ListItem
          leftAvatar={<Avatar>R</Avatar>}
          primaryText="Recipes"
          secondaryText="Jan 17, 2014" />
        <ListItem
          leftAvatar={<Avatar>W</Avatar>}
          primaryText="Work"
          secondaryText="Jan 28, 2014" />
        <ListItem
          leftAvatar={<Avatar>P</Avatar>}
          primaryText="Photos"
          secondaryText="Jan 9, 2014" />
        <ListItem
          leftAvatar={<Avatar>R</Avatar>}
          primaryText="Recipes"
          secondaryText="Jan 17, 2014" />
        <ListItem
          leftAvatar={<Avatar>W</Avatar>}
          primaryText="Work"
          secondaryText="Jan 28, 2014" />
      </List>
    </div>;
  }

  componentDidMount(): void {
    // Listen
    this.get();
  }

  componentWillUnmount(): void {
    // Un-listen
  }
}
