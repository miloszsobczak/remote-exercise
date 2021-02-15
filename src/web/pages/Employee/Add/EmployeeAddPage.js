import React from 'react'

import { Container } from 'components/Container';
import EmployeeAdd from 'web/app/components/Employee/EmployeeAdd/EmployeeAdd';

export default function EmployeeAddPage () {
  return (
    <Container data-testid="employee-add-page">
      <EmployeeAdd />
    </Container>
  )
}
