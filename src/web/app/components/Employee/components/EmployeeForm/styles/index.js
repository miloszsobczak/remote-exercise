import styled from 'styled-components';

import Text from 'components/Text';
import SelectField from 'components/Form/SelectField';
import { Container } from 'components/Container';
import typography from 'theme/typography';
import LoadingLogo from 'components/LoadingLogo';

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

export const EmployeeFormField = styled.form`
  opacity: ${({ loading }) => loading ? 0.5 : 1};
`

export const EmployeeFormFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`

export const EmployeeFormPreLoader = styled(LoadingLogo)`
  margin: 0 auto;
`