/// <reference path="../../../typings/tsd.d.ts" />

import React = require("react");

/* tslint:disable:no-any */
const styles: any = require("./Home.module.less");
/* tslint:enable:no-any */

export default class ContentPage extends React.Component<{}, {}> {

    render(): React.ReactElement<{}> {
        return <div className={styles.container}>Home Module</div>;
    }
}
