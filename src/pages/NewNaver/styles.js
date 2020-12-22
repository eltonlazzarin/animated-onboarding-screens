import styled from 'styled-components';

export const Container = styled.div`
  width: 592px;
  margin: 64px auto;

  header {
    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 5px;
  }

  h2 {
    color: var(--dark-gray);
    font-weight: bold;
    margin-left: 22px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    padding-top: 32px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    color: var(--dark-gray);
  }

  footer {
    display: flex;
    align-items: center;
    margin: 32px 0 0 415px;
  }
`;
