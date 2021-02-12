import React from 'react';
import EmployeeList from 'web/app/components/Employee/EmployeeList/EmployeeList';

import { Page, PageContainer } from 'components/Page';

export default function HomePage () {
  return (
    <Page data-testid="home-page">
      <PageContainer>
        <EmployeeList />
      </PageContainer>
    </Page>
  )
}
