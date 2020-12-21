import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';

import Container from './styles';

export default function Header() {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/logon');

    localStorage.clear();
  };

  return (
    <Container>
      <header>
        <img src={logo} alt="Nave Logo" />
        <button onClick={handleLogout}>Sair</button>
      </header>
    </Container>
  );
}
