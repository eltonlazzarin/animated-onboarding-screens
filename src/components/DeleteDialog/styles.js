import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 32px;
    background: #fff;
    width: 593px;
    height: 233px;
  }

  main {
    margin-left: 30px;
  }

  p {
    margin-top: 34px;
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    margin-left: 145px;
    margin-top: 50px;
  }
`;

export default Container;
