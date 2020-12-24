import styled from 'styled-components';

const Button = styled.button`
  height: 2.5rem;
  width: ${(props) => (props.primary ? '24rem' : '11rem')};
  font-size: 0.87rem;
  border: 0;
  background: var(--dark-gray);
  font-weight: bold;
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transition: opacity 0.5s;
  }
`;

export const LightButton = styled(Button)`
  width: 11rem;
  background: none;
  color: var(--dark-gray);
  border: 0.06rem solid var(--dark-gray);
`;

export default Button;
