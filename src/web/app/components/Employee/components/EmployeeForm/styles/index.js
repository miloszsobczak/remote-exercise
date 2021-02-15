import styled from 'styled-components';

import Text from 'components/Text';
import SelectField from 'components/Form/SelectField';
import { Container } from 'components/Container';
import typography from 'theme/typography';

export const EmployeeFormSubHeader = styled(Text)`
  color: var(--colors-bayoux);
`;

export const EmployeeFormContainer = styled(Container)`
  max-width: 530px;
  padding: 0;
`;

export const EmployeeFormCurrencyField = styled(SelectField)`
  background-position-y: calc(50% - 2px);
  color: var(--colors-lynch);
  ${typography.bodyMedium}
`;
