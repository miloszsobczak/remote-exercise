import styled from 'styled-components';

import { Field } from '../../FieldParts';
import { ReactComponent as Icon } from 'theme/icons/search.svg';

export const Search = styled.input`
  display: inline-block;
  /* check designs regarding font display (its size difference) */
  width: 209px;
  background: none;
  border: 1px solid transparent;
  border-radius: 20px;
  color: var(--colors-lynch);
  padding: 12px 12px 12px calc(var(--spacer) * 1.35);
  appearance: none;
  ${({ theme }) => theme.typography.bodySmall}

  &::placeholder {
    color: var(--colors-lynch);
  }

  &:not(:placeholder-shown) {
    color: var(--colors-darkBlue);
  }

  &:focus,
  &:active {
    background: #FDFEFF;
    border-color: #E7EFFC;
    outline: none;
    box-shadow: inset 1px 2px 3px #C6D6EF;

    &::placeholder {
      color: var(--colors-bayoux);
    }
  }

  &:hover {
    border-color: #E7EFFC;
  }
`;

export const IconSearch = styled(Icon)`
  width: calc(var(--spacer) / 2);
  position: absolute;
  left: calc(var(--spacer) / 2);
  top: 50%;
  transform: translateY(-50%);
`

export const IconField = styled(Field)`
  fill: var(--colors-lynch);
  position: relative;
  display: inline-block;
  margin-bottom: calc(var(--spacer) / 2);
` 
