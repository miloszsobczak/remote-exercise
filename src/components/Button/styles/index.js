import styled from 'styled-components';

export const getStyles = component => styled(component)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;

  background: var(--colors-irisBlue);
  color: var(--colors-blank);
  text-decoration: none;

  & svg {
    fill: var(--colors-blank);
    height: 1.2em;
    margin-right: 0.3em;
  }
`;
