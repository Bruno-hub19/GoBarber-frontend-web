import styled, { css } from 'styled-components';

const toastTypesOption = {
  info: css`
    background: #598bc1;
    color: #f0f0f7;
  `,
  success: css`
    background: #59c176;
    color: #f0f0f7;
  `,
  error: css`
    background: #dd7373;
    color: #f0f0f7;
  `,
};

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDesription: boolean;
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;

  ${props => toastTypesOption[props.type || 'info']}

  & + div {
    margin-top: 10px;
  }

  > svg {
    margin: 1px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    width: 20px;
    height: 20px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    outline: none;
  }

  ${props =>
    !props.hasDesription &&
    css`
      align-items: center;
    `}
`;
