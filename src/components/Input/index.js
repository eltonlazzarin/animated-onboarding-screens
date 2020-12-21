import React from 'react';

import { Container } from './styles';

const Input = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
