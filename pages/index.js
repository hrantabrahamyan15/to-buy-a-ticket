import React from 'react';

import { HelmetLayout } from 'layouts/index';
import { HomeContainer } from 'containers/index';

const HomePage = (props) => (
  <HelmetLayout title="Home" metaDescription="Home page">
    <HomeContainer {...props} />
  </HelmetLayout>
);

export default HomePage;
