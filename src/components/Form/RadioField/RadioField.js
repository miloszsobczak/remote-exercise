import React from 'react';
import PropTypes from 'prop-types';

import { Radio, Field, Label, Hint } from './styles';

export default function RadioField({ label, helper, checked, errorMsg, formRef, ...props }) {
  return (
    <Field as="label" checked={checked}>
      <Label>{label}</Label>
      <Radio ref={formRef} {...props} type="radio" />
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

RadioField.defaultTypes = {
  checked: false
}

RadioField.propTypes = {
  /** Field label */
  label: PropTypes.string.isRequired,
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
  /** Field checked value */
  checked: PropTypes.bool,
  /** Ref for react-hook-form library */
  formRef: PropTypes.func
};
