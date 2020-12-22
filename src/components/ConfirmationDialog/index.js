import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Container from './styles';

export default function ConfirmationDialog({ setConfirmation, action }) {
  return (
    <Container>
      <div>
        <span>
          <AiOutlineClose
            onClick={() => setConfirmation(false)}
            size={24}
            color={'#212121'}
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
