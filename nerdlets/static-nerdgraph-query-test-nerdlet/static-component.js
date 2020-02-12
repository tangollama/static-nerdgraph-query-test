import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spinner, NerdGraphQuery } from 'nr1';
import get from 'lodash.get';

export default class StaticComponent extends Component {
  static propTypes = {
    entityGuid: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { entity: null }
  }

  async componentDidMount() {
    const __query = `{
      actor {
        entity(guid: "${this.props.entityGuid}") {
          account {
              id
              name
          }
          name
          accountId
          ... on ApmApplicationEntity {
              language
          }
          tags {
              key
          }
        }
      }}`;
    console.debug(__query);
    const result = await NerdGraphQuery.query({
      query: __query
    });
    console.debug(result);
    const entity = get(result, 'data.actor.entity', false);
    this.setState({ entity });
  }

  render() {
    const { entity } = this.state;
    if (!entity) {
      return <Spinner fillContainer />
    }
    return (
      <div>
       <h1>{entity.name}</h1>
      </div>
    )
  }
}
