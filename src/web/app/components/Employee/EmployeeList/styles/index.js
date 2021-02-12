import styled from 'styled-components';
import { Link } from 'react-router-dom';

import typography from 'theme/typography'

import Text from 'components/Text';
import { getStyles as getButtonStyles } from 'components/Button/styles';
import { Card } from 'components/Card';
import LoadingLogo from 'components/LoadingLogo';

export const EmployeeCard = styled(Card)`
  margin-top: var(--spacer);
  flex: 2;
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
export const LinkButton = getButtonStyles(Link)
