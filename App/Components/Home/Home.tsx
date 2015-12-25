/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

import Card = require("material-ui/lib/card/card");
import CardMedia = require("material-ui/lib/card/card-media");
import CardTitle = require("material-ui/lib/card/card-title");

/* tslint:disable:no-any */
const styles: any = require("./Home.module.less");
/* tslint:enable:no-any */

// Material-UI style overrides
const cardStyle: {} = {
  marginTop: 10,
  marginRight: 10
};

export default class Home extends React.Component<{}, {}> {

  render(): React.ReactElement<{}> {
    return <div className={styles.Home}>
      <h1>Home Component</h1>
      <p>Hay some stuff.</p>
      <div className={styles.Grid}>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
      </div>
    </div>;
  }
}

class TestCard extends React.Component<{}, {}> {
  render(): React.ReactElement<{}> {
    return <Card style={cardStyle}>
      <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
        <img src="http://lorempixel.com/600/337/nature/"/>
      </CardMedia>
     </Card>;
  }
}
