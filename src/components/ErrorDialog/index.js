import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Container from './styles';

export default function ConfirmationDialog({ setErrorMessage, action }) {
  return (
    <Container>
      <div>
        <span>
          <AiOutlineClose
            onClick={() => setErrorMessage(false)}
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
