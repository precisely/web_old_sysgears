/*eslint-disable no-unused-vars*/
import React from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DASHBOARD_QUERY from '../graphql/DashboardQuery.graphql';
import DashboardView from '../components/DashboardView';

@graphql(DASHBOARD_QUERY, {
  options: { variables: { limit: 10, after: 0 } },
  props: ({ data }) => {
    const { loading, error } = data;
    if (error) throw new Error(error);
    const reports = {
      edges: [{ node: { id: 123, name: 'ME/CFS' } }, { node: { id: 456, name: 'Psoriasis' } }]
    };
    const variants = { edges: [] };
    return { loading, variants, reports };
  }
})
export default class Dashboard extends React.Component {
  static propTypes = {
    reports: PropTypes.object.isRequired,
    variants: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.reports = props.reports;
    this.variants = props.variants;
  }

  render() {
    const reports = {
      edges: [{ node: { id: 123, name: 'ME/CFS' } }, { node: { id: 456, name: 'Psoriasis' } }]
    };
    const variants = { edges: [] };
    return <DashboardView reports={reports} variants={variants} />;
  }
}
