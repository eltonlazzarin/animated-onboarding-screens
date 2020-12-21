import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: ${(props) => (props.primary ? '384px' : '176px')};
  font-size: 14px;
  border: 0;
  background: var(--dark-gray);
  font-weight: bold;
  color: var(--white);
  cursor: pointer;
`;

export const LightButton = styled(Button)`
  width: 176px;
  background: none;
  color: var(--dark-gray);
  border: 1px solid var(--dark-gray);
`;

export default Button;
