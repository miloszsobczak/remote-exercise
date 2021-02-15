import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'components/Form/FieldParts'
import { SalaryFieldColumn, SalaryFieldGrid } from './styles'

export default function SalaryField({ Salary, Currency }) {
  return (
    <Field as="label">
      <SalaryFieldGrid columns="2">
        <SalaryFieldColumn>
          {Salary}
        </SalaryFieldColumn>
        <SalaryFieldColumn column="2">
          {Currency}
        </SalaryFieldColumn>
      </SalaryFieldGrid>
    </Field>
  );
}

SalaryField.propTypes = {
  /** Salary[TextField] */
  Salary: PropTypes.node.isRequired,
  /** Currency [SelectField] */
  Currency: PropTypes.node.isRequired
};
