import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="Dashboard"
    meta={[
      {
        name: 'description',
        content: 'Dashboard page'
      }
    ]}
  />
);

/*
 * VariantsTable
 *  
 */
function VariantsTable({ variants }) {
  return <table>{variants.edges.map(variant => <tr>{variant.name}</tr>)}</table>;
}

VariantsTable.propTypes = {
  variants: PropTypes.object.isRequired
};

/*
 * ReportList
 * 
 */
function ReportLink({ id, name }) {
  return (
    <span>
      <Link to={`/reports/${id}`}>
        <h5>{name}</h5>
      </Link>
    </span>
  );
}

ReportLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

function ReportList({ reports }) {
  return reports.edges.map(edge => <ReportLink {...edge.node} />);
}

ReportList.propTypes = {
  reports: PropTypes.object.isRequired
};

export default function DashboardView({ reports, variants }) {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <h3>My Reports</h3>
        <ReportList reports={reports} />
      </div>
      <div className="text-center mt-4 mb-4">
        <VariantsTable variants={variants}>Hello</VariantsTable>
      </div>
    </PageLayout>
  );
}

DashboardView.propTypes = {
  reports: PropTypes.object.isRequired,
  variants: PropTypes.object.isRequired
};
