import React from 'react';
import Playground from '../../../components/Playground';
import { Container } from 'components/Container';

export default function PlaygroundPage () {
  return (
    <Container data-testid="playground-page">
      <Playground />
    </Container>
  )
}
