import styled from 'styled-components';

import { Column, Grid } from 'components/Grid';

export const EmploymentTypeFieldGrid = styled(Grid)`
  grid-gap: 20px;
  margin-top: calc(var(--spacer) / 2);
`

export const EmploymentTypeFieldColumn = styled(Column)`
  & > label {
    width: 100%;
  }
`
