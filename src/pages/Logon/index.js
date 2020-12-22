import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input/styles';

import Button from '../../components/Button/styles';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);

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

        <div>
          <label htmlFor="email">E-mail</label>
          <Input
            id="email"
            type="email"
            label="E-mail"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            label="Senha"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

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
