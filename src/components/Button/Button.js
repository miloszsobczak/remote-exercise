import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getStyles } from './styles';

const ButtonStyled = getStyles(styled.button``)

export default function Button({ children, ...props }) {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  /** Button text content */
  children: PropTypes.node
};
