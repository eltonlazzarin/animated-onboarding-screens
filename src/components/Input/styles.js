import styled from 'styled-components';

const Input = styled.input`
  height: 2.5rem;
  width: ${(props) => (props.small ? '17.5rem' : '24rem')};
  padding: 0 0.62rem;
  margin-bottom: ${(props) => (props.small ? '0px' : '2rem')};
  font-size: 1rem;
  color: var(--light-gray);
  border: 0.06rem solid var(--medium-gray);

  &::placeholder {
    color: var(--light-gray);
  }
`;

export default Input;
