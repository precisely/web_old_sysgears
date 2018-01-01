/*eslint-disable no-unused-vars*/
import React from 'react';
import { graphql, compose } from 'react-apollo';

import ReportView from '../components/ReportView';

class Report extends React.Component {
  render() {
    return <ReportView {...this.props} />;
  }
}

const ReportWithApollo = compose()(Report);

export default ReportWithApollo;
