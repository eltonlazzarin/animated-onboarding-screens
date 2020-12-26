import React from 'react';

import nave from '../../assets/nave.png';

import { Container } from './styles';

export default function EmptyNaverList() {
  return (
    <Container>
      <img src={nave} alt="Nave" />
      <h4>Nenhum Naver para mostrar</h4>
      <p>Crie algum Naver acima</p>
    </Container>
  );
}
