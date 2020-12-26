import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes loading {
    0% {
      margin-top: 20px;
    }
    20% {
      margin-top: 40px;
    }
    40% {
      margin-top: 20px;
    }
    60% {
      margin-top: 40px;
    }
    80% {
      margin-top: 20px;
    }
    100% {
      margin-top: 40px;
    }
  }

  img {
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

export default Container;
