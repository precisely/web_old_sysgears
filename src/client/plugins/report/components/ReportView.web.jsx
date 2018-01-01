import React from 'react';
import Helmet from 'react-helmet';
import { Markdown } from 'markdown-to-jsx';
import PropTypes from 'prop-types';

import { PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="Report"
    meta={[
      {
        name: 'description',
        content: 'Report page'
      }
    ]}
  />
);

const ReportView = ({ content, data }) => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <Markdown data={data}>{content}</Markdown>
      </div>
    </PageLayout>
  );
};

ReportView.propTypes = {
  content: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default ReportView;
