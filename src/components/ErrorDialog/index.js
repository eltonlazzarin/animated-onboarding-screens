import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Context } from '../../store';

import Container from './styles';

export default function ConfirmationDialog({ action }) {
  const [, dispatch] = useContext(Context);

  function handleCloseErrorDialog() {
    dispatch({ type: 'SET_ERROR_DIALOG', payload: false });
  }

  return (
    <Container>
      <div>
        <span>
          <AiOutlineClose
            onClick={handleCloseErrorDialog}
            size={24}
            color="#212121"
          />
        </span>

        <main>
          <h2>Erro ao {action}</h2>
          <p>Verifique os dados inseridos ou a sua conexão com a internet.</p>
        </main>
      </div>
    </Container>
  );
}
