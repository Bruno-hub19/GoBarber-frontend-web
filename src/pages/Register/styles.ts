import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/register-img.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f0f0f7;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s linear;

      &:hover {
        color: ${shade(0.4, '#f0f0f7')};
      }
    }
  }

  /* "a" tag outside form, but inside Content element */
  > a {
    color: #f0f0f7;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s linear;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.4, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
