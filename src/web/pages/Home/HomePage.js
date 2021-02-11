import React from 'react';
import EmployeeList from 'web/app/components/Employee/EmployeeList/EmployeeList';

import { Container } from 'components/Container';

export default function HomePage () {
  return (
    <Container data-testid="home-page">
      <EmployeeList />
    </Container>
  )
}
