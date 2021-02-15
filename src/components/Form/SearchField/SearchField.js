import React from 'react';
import PropTypes from 'prop-types';
import { Search, IconField, IconSearch } from './styles';

export default function SearchField({ placeholder, formRef, ...props }) {
  return (
    <IconField as="label">
      <IconSearch />
      <Search ref={formRef} placeholder={placeholder} {...props} />
    </IconField>
  );
}

SearchField.defaultProps = {
  placeholder: 'Search...',
};

SearchField.propTypes = {
  /** Field Placeholder */
  placeholder: PropTypes.string.isRequired,
  /** Ref for react-hook-form library */
  formRef: PropTypes.func
};
