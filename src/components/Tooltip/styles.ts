import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 200px;
    background: #ff9000;
    color: #f0f0f7;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;

    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 0.2s linear;
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
