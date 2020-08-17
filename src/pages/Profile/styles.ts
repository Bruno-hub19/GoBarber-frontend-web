import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  > header {
    height: 144px;
    background: #28262e;
    display: flex;
    align-items: center;
    padding: 0 80px;

    svg {
      color: #f0f0f7;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;

  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
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
`;

export const AvatarInput = styled.div`
  position: relative;
  width: 186px;
  margin: 0 auto;
  margin-bottom: 32px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    width: 48px;
    height: 48px;
    position: absolute;
    background: #ff9000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background 0.2s linear;

    svg {
      color: #312e28;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
