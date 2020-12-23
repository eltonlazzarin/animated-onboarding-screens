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

    position: relative;
    margin: 0 auto;
    background: #fff;
    width: 1006px;
    height: 503px;
  }

  img {
    object-fit: cover;
    width: 31.56rem;
  }

  span {
    position: absolute;
    right: 23px;
    top: 16px;
    cursor: pointer;
  }

  main {
    margin-left: 30px;
  }

  h2 {
    margin: 32px 0 10px 0;
  }

  p {
    margin: 10px 0 24px 0;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 147px;

    svg {
      margin-right: 13px;
      cursor: pointer;
    }

    a {
      margin-top: 5px;
    }
  }
`;

export default Container;
