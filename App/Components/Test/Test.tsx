/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

/* tslint:disable:no-any */
const styles: any = require("./Test.module.less");
/* tslint:enable:no-any */

interface IState {
  testVar?: string;
}
interface IProps {
  testProp?: string;
}

export default class ContentPage extends React.Component<IProps, IState> {

  private get: () => void = () => {
    // Get: this.setState({...});
  };

  constructor() {
    super();
    this.state = {};
  }

  render(): React.ReactElement<{}> {
    return <div className={styles.container}>
      Test Module
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
