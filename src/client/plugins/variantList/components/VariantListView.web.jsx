import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="VariantList"
    meta={[
      {
        name: 'description',
        content: 'VariantList page'
      }
    ]}
  />
);

const VariantListView = () => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <p>Hello VariantList!</p>
      </div>
    </PageLayout>
  );
};

export default VariantListView;
