import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes loading {
    0% {
      margin-top: 1.25rem;
    }
    20% {
      margin-top: 2.5rem;
    }
    40% {
      margin-top: 1.25rem;
    }
    60% {
      margin-top: 2.5rem;
    }
    80% {
      margin-top: 1.25rem;
    }
    100% {
      margin-top: 2.5rem;
    }
  }

  img {
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

export default Container;
