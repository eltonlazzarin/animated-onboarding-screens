import styled from 'styled-components';

export const Container = styled.div`
  label {
    font-size: 14px;
    font-weight: bold;
    color: var(--dark-gray);
  }

  input {
    height: 40px;
    width: 384px;
    padding: 0 10px;
    margin-bottom: 32px;
    font-size: 16px;
    color: var(--light-gray);
    border: 1px solid var(--dark-gray);
  }

  &::placeholder {
    color: var(--light-gray);
  }
`;
