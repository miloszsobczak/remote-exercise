import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getStyles } from './styles';

const ButtonStyled = getStyles(styled.button``)

export default function Button({ children, ...props }) {
  return (
    <ButtonStyled type="button" se {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultTypes = {
  secondary: false,
  long: false,
}

Button.propTypes = {
  /** Button text content */
  children: PropTypes.node,
  /** Button secondary state */
  secondary: PropTypes.bool,
  /** Button long state */
  long: PropTypes.bool
};

export const LinkButton = getStyles(Link);
