import styled from 'styled-components';
import typography from 'theme/typography';

import {
  Field as FieldPart,
  Label as FieldLabel,
  Hint as FieldHint
} from '../../FieldParts';

export const Radio = styled.input`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: calc(var(--spacer) / 2);
  height: calc(var(--spacer) / 2);

  &:before {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    background: transparent;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 1.5px solid var(--colors-lynch);
    border-radius: calc(var(--spacer) / 2);
  }

  &:checked {
    &:before {
      border-color: var(--colors-irisBlue);
    }
    &:after {
      cursor: pointer;
      position: absolute;
      left: 50%;
      top: 50%;
      background: var(--colors-irisBlue);
      content: "";
      display: block;
      width: calc(var(--spacer) / 4);
      height: calc(var(--spacer) / 4);
      transform: translateX(-50%) translateY(-50%);
      border-radius: calc(var(--spacer) / 4);
      // todo: change the way it's calculated
      box-shadow: 0px 0px 0px 3px var(--colors-blank);
    }
  }
`;

export const Label = styled(FieldLabel)`
  color: var(--colors-darkBlue);
  ${typography.bodySmall}
`

export const Field = styled(FieldPart)`
  border-radius: var(--radius);
  border: 1px solid ${props => props.checked ? 'var(--colors-spindle)' : 'var(--colors-geyser)'};
  padding: 16px 20px;
  position: relative;
  background: ${props => props.checked ? 'var(--colors-linkWater)' : 'transparent'};

  &:hover {
    cursor: pointer;
    background: var(--colors-linkWater);
  }
`

export const Hint = styled(FieldHint)`
`
