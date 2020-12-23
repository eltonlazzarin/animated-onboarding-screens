import React from 'react';

import api from '../../services/api';

import Button, { LightButton } from '../../components/Button/styles';

import Container from './styles';

export default function DeleteDialog({ setDeleteNaver, setConfirmation, id }) {
  async function getNaverData() {
    const token = localStorage.getItem('@Navedex:Token');

    await api.delete(`navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDeleteNaver(false);
    setConfirmation(true);
  }

  return (
    <Container>
      <div>
        <h2>Excluir Naver</h2>
        <p>Tem certeza que desaja excluir este Naver?</p>

        <footer>
          <LightButton onClick={() => setDeleteNaver(false)}>
            Cancelar
          </LightButton>
          <Button onClick={getNaverData}>Excluir</Button>
        </footer>
      </div>
    </Container>
  );
}
