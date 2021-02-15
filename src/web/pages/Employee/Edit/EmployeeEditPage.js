import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container } from 'components/Container';
import EmployeeEdit from 'web/app/components/Employee/EmployeeEdit/EmployeeEdit';

export default function EmployeeEditPage () {
  const { params: { employeeId } } = useRouteMatch();

  return (
    <Container data-testid="employee-edit-page">
      <EmployeeEdit id={Number(employeeId)} />
    </Container>
  )
}
