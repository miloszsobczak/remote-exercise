import styled from 'styled-components';

// in future we should extend this component for many variants (type=[warning/error/etc])
export const Alert = styled.div`
  --alert-spacer: calc(var(--spacer) * 0.85);
  --alert-border-color: #f24f2f;
  --alert-background-color: #fff6f7;

  display: flex;
  border: 1px solid var(--alert-border-color);
  background-color: var(--alert-background-color);
  padding: var(--alert-spacer);
  color: var(--colors-bayoux);
  border-radius: var(--radius);
  margin: var(--spacer) 0;

  & svg {
    fill: var(--colors-redPink);
    margin-right: calc(var(--spacer) / 2);
  }
`;
