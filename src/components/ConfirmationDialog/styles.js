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
    background: #fff;
    padding: 32px;
    width: 593px;
    height: 160px;
  }

  span {
    position: absolute;
    right: 23px;
    top: 16px;
    cursor: pointer;
  }

  main {
  }

  h2 {
  }

  p {
    margin-top: 24px;
    line-height: 36px;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 147px;

    svg {
      margin-right: 13px;
      cursor: pointer;
    }
  }
`;

export default Container;
