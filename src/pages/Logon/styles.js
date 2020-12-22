import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 448px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--dark-gray);
    padding: 32px;
  }

  img {
    height: 70px;
    width: 270px;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: var(--dark-gray);
    margin-bottom: 4px;
  }

  span {
    color: var(--dark-gray);
    margin-bottom: 14px;
  }
`;
