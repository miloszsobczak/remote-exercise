import React from 'react';
import PropTypes from 'prop-types';
import { Field, Label, Hint } from '../FieldParts';
import { Select } from './styles';

export default function SelectField({ children, label, helper, errorMsg, formRef, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label" error={errorMsg}>
      <Label>{label}</Label>
      <Select ref={formRef} {...props} {...invalidAttr}>
        {children}
      </Select>
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

SelectField.propTypes = {
  /** Field label */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /** Field label */
  label: PropTypes.string,
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
  /** Ref for react-hook-form library */
  formRef: PropTypes.func
};
