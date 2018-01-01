/*eslint-disable no-unused-vars*/
import React from 'react';
import { graphql, compose } from 'react-apollo';

import VariantListView from '../components/VariantListView';

class VariantList extends React.Component {
  render() {
    return <VariantListView {...this.props} />;
  }
}

const VariantListWithApollo = compose()(VariantList);

export default VariantListWithApollo;
