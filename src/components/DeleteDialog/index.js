import React from 'react';

import Button, { LightButton } from '../../components/Button/styles';

import Container from './styles';

export default function DeleteDialog({ setDeleteNaver }) {
  return (
    <Container>
      <div>
        <h2>Excluir Naver</h2>
        <p>Tem certeza que desaja excluir este Naver?</p>

        <footer>
          <LightButton onClick={() => setDeleteNaver(false)}>
            Cancelar
          </LightButton>
          <Button onClick={() => {}}>Excluir</Button>
        </footer>
      </div>
    </Container>
  );
}
