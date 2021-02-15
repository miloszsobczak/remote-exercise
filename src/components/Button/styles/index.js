import styled from 'styled-components';

export const getStyles = component => styled(component)`
  --button-color: ${({ secondary }) => secondary ? 'var(--colors-irisBlue)' : 'var(--colors-blank)'};
  --button-bg-color: ${({ secondary }) => secondary ? 'var(--colors-blank)' : 'var(--colors-irisBlue)'};
  --button-border-color: ${({ secondary }) => secondary ? 'var(--colors-moonraker)' : 'transparent'};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;

  background: var(--button-bg-color);
  color: var(--button-color);
  text-decoration: none;
  border: 3px solid var(--button-border-color);

  min-width: ${({ long }) => long ? '182px' : 'none'};

  & + &,
  & + a,
  a + & {
    margin-left: calc(var(--spacer) / 2);
  }

  & svg {
    fill: var(--button-color);
    height: 1.2em;
    margin-right: 0.3em;
  }

  &:hover {
    --button-bg-color: ${({ secondary }) => secondary ? 'var(--colors-selago)' : 'var(--colors-royalBlue)'};
  }

  &:focus {
    --button-border-color: ${({ secondary }) => secondary ? 'var(--colors-spindle)' : 'var(--colors-moonraker)'};
    outline: none;
  }
`;

