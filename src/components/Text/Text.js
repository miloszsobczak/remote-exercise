import styled from 'styled-components';

const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]}
`;

export default Text;

export const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;

export const TextCapitalized = styled(Text)`
  text-transform: capitalize;
`
