import React from 'react'
import styled from 'styled-components';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export default function EmployeeAddPage () {
    return (
        <Container data-testid="employee-add-page">
            employee-add-page
        </Container>
    )
}
