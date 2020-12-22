import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: ${(props) => (props.small ? '280px' : '384px')};
  padding: 0 10px;
  margin-bottom: ${(props) => (props.small ? '0px' : '32px')};
  font-size: 16px;
  color: var(--light-gray);
  border: 1px solid var(--medium-gray);

  &::placeholder {
    color: var(--light-gray);
  }
`;

export default Input;
