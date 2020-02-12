import React from 'react';
import StaticComponent from './static-component';
import { NerdletStateContext } from 'nr1';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class StaticNerdgraphQueryTestNerdletNerdlet extends React.Component {

    render() {
        return <NerdletStateContext.Consumer>
            {nerdletUrlState => (<StaticComponent entityGuid={nerdletUrlState.entityGuid} />)}
        </NerdletStateContext.Consumer>
    }
}
