import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import Button from '../../components/Button/styles';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const login = { email, password };

    if (!email) {
      setInputError('Todos os campos são obrigatórios.');
      return;
    }

    if (!password) {
      setInputError('Todos os campos são obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('users/login', login);

      localStorage.setItem('@Navedex:Token', response.data.token);

      history.push('/navers');
    } catch (error) {
      setLoading(false);
      setInputError('E-mail ou senha inválidos.');
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Nave Logo" />

        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          name="password"
          type="password"
          label="Senha"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {inputError && <span>{inputError}</span>}

        {loading ? (
          <Button type="submit" primary>
            Loading...
          </Button>
        ) : (
          <Button type="submit" primary>
            Logon
          </Button>
        )}
      </form>
    </Container>
  );
}
