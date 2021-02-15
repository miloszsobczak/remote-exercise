import styled from 'styled-components';

import { Column, Grid } from 'components/Grid';

export const SalaryFieldGrid = styled(Grid)`
  grid-template-columns: 1fr 75px;
`

export const SalaryFieldColumn = styled(Column)`
  & > label {
    width: 100%;
  }
`
