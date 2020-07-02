import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 5px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    color: #f0f0f7;
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    color: #f0f0f7;
    margin-right: 16px;
  }
`;
