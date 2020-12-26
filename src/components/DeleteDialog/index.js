import React, { useContext } from 'react';

import api from '../../services/api';
import { Context } from '../../store';

import Button, { LightButton } from '../Button/styles';

import Container from './styles';

export default function DeleteDialog({ id }) {
  const [, dispatch] = useContext(Context);

  async function handleGetNaverData() {
    const token = localStorage.getItem('@Navedex:Token');

    await api.delete(`navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: 'SET_DELETE_NAVER_DIALOG', payload: false });
    dispatch({ type: 'SET_CONFIRMATION_DIALOG', payload: true });
    dispatch({ type: 'SET_SHOW_MODAL', payload: false });
  }

  function handleCancelDeleteDialog() {
    dispatch({ type: 'SET_DELETE_NAVER_DIALOG', payload: false });
  }

  return (
    <Container>
      <div>
        <h2>Excluir Naver</h2>
        <p>Tem certeza que deseja excluir este Naver?</p>

        <footer>
          <LightButton onClick={handleCancelDeleteDialog}>Cancelar</LightButton>
          <Button onClick={handleGetNaverData}>Excluir</Button>
        </footer>
      </div>
    </Container>
  );
}
