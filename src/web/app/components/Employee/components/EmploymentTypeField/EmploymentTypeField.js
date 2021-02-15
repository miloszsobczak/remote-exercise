import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text'
import { Field } from 'components/Form/FieldParts'
import {
  EmploymentTypeFieldColumn,
  EmploymentTypeFieldGrid
} from './styles'

export default function EmploymentTypeField({ fields }) {
  return (
    <Field>
      <Text size="bodyLead">Type of employment</Text>
      <EmploymentTypeFieldGrid columns={fields.length}>
        {Array.isArray(fields) && fields.map((field, index) => {
          return (
            <EmploymentTypeFieldColumn key={field.id} column={index + 1}>
              {field.field}
            </EmploymentTypeFieldColumn>
          )
        })}
      </EmploymentTypeFieldGrid>
    </Field>
  );
}

EmploymentTypeField.propTypes = {
  /** Salary[TextField] */
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    field: PropTypes.node
  }))
};
