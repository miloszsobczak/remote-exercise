import React from 'react';
import styled from 'styled-components';
import Playground from '../../../components/Playground';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export default function PlaygroundPage () {
    return (
        <Container data-testid="playground-page">
            <Playground />
        </Container>
    )
}
