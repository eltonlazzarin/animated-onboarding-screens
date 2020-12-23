import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--modal-background);
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  div {
    display: flex;

    position: relative;
    margin: 0 auto;
    background: var(--white);
    width: 62.87rem;
    height: 31.44rem;
  }

  img {
    object-fit: cover;
    width: 31.56rem;
  }

  span {
    position: absolute;
    right: 1.44rem;
    top: 1rem;
    cursor: pointer;
  }

  main {
    margin-left: 1.87rem;
  }

  h2 {
    margin: 2rem 0 0.62rem 0;
  }

  p {
    margin: 0.62rem 0 1.5rem 0;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 9.18rem;

    svg {
      margin-right: 0.81rem;
      cursor: pointer;
    }

    a {
      margin-top: 0.31rem;
    }
  }
`;

export default Container;
