import React from 'react';

import { HelmetLayout } from 'layouts/index';
import { CompanyesContainer } from 'containers/index';

const CompanyPage = (props) => (
  <HelmetLayout title="Company" metaDescription="Company page">
    <CompanyesContainer {...props} />
  </HelmetLayout>
);

export default CompanyPage;
