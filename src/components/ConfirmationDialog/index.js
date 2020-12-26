import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Context } from '../../store';

import Container from './styles';

export default function ConfirmationDialog({ action }) {
  const [, dispatch] = useContext(Context);

  function handleCloseConfirmationDialog() {
    dispatch({ type: 'SET_CONFIRMATION_DIALOG', payload: false });
  }

  return (
    <Container>
      <div>
        <span>
          <AiOutlineClose
            onClick={handleCloseConfirmationDialog}
            size={24}
            color="#212121"
          />
        </span>

        <main>
          <h2>Naver {action}</h2>
          <p>Naver {action} com sucesso!</p>
        </main>
      </div>
    </Container>
  );
}
