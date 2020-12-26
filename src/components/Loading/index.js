import React from 'react';

import nave from '../../assets/nave.png';

import Container from './styles';

export default function Loading() {
  return (
    <Container>
      <img src={nave} alt="Nave" />
    </Container>
  );
}
