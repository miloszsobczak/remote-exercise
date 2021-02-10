import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Field = styled.div`
  display: block;
  font-size: 0.8125rem;

  --labelColor: var(--colors-bayoux);

  &:focus-within {
    --labelColor: var(--colors-irisBlue);
  }

  & + & {
    margin-top: 32px;
  }
`;

export const Label = styled.span`
  display: block;
  color: var(--labelColor);
`;

const Text = styled.span`
  display: block;
  color: var(--colors-bayoux);
  margin-top: 4px;
`;

const ErrorMsg = styled.span`
  color: var(--colors-redPink);
`;

export function Hint({ errorMsg, helper }) {
  return (
    <Text>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {errorMsg && helper && ' - '}
      {helper}
    </Text>
  );
}

Hint.propTypes = {
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
};