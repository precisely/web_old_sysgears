/*eslint-disable no-unused-vars*/
import React from 'react';
import { graphql } from 'react-apollo';
import USER_REPORT_QUERY from '../graphql/UserReportQuery.graphql';
import ReportView from '../components/ReportView';

@graphql(USER_REPORT_QUERY, {
  options: ({ user_id, report_id }) => ({
    variables: { user_id, report_id }
  }),
  props: ({ data }) => {
    const { loading, error, posts } = data;
    
  }
})
class Report extends React.Component {
  render() {
    return <ReportView {...this.props} />;
  }
}

const ReportWithApollo = compose()(Report);

export default ReportWithApollo;
