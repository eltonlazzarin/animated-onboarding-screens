import React from 'react';

import nave from '../../assets/nave.png';

import { Container } from './styles';

export default function EmptyNaverList() {
  return (
    <Container>
      <span>
        <img src={nave} alt="Nave" />
        <h4>Nenhum Naver para mostrar</h4>
        <p>Adicione algum Naver acima</p>
      </span>
    </Container>
  );
}
