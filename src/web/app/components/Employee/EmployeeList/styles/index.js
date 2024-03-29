import styled from 'styled-components';
import { Link } from 'react-router-dom';

import typography from 'theme/typography'

import Text from 'components/Text';
import { Card, CardBody } from 'components/Card';
import LoadingLogo from 'components/LoadingLogo';
import { Table } from 'components/Table';

export const EmployeeCard = styled(Card)`
  margin-top: var(--spacer);
  flex: 2;
`

export const EmployeeCardBody = styled(CardBody)`
  padding-top: calc(var(--spacer) / 2);
`

export const EmployeeLoadingLogo = styled(LoadingLogo)`
  margin: 80px auto 0;
  width: 46px;
`

export const TableCellLink = styled(Link)`
  ${() => typography.bodyMedium}
  color: var(--colors-irisBlue);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const EmployeesNumber = styled(Text)`
  color: var(--colors-lynch);
  margin-left: 8px;
`

export const EmployeeTable = styled(Table)`
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};
`
