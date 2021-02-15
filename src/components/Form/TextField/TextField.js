import React from 'react';
import PropTypes from 'prop-types';
import { Field, Label, Hint } from '../FieldParts';
import { Input } from './styles';

export default function TextField({ label, helper, errorMsg, formRef, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label" error={errorMsg}>
      <Label>{label}</Label>
      <Input ref={formRef} {...props} {...invalidAttr} />
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  /** Field type */
  type: PropTypes.string,
  /** Field label */
  label: PropTypes.string.isRequired,
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
  /** Ref for react-hook-form library */
  formRef: PropTypes.func
};
