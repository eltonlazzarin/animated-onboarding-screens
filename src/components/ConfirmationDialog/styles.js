import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  div {
    display: flex;

    position: relative;
    margin: 0 auto;
    background: var(--white);
    padding: 2rem;
    width: 37.06rem;
    height: 10rem;
  }

  span {
    position: absolute;
    right: 1.43rem;
    top: 1rem;
    cursor: pointer;
  }

  p {
    margin-top: 1.5rem;
    line-height: 2.25rem;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 9.19rem;

    svg {
      margin-right: 0.81rem;
      cursor: pointer;
    }
  }
`;

export default Container;
