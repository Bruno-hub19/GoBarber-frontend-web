import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logoSvg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="GoBaber logo" />

        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="/">Esqueci minha senha</a>
        </form>

        <a href="/">
          <FiLogIn size={16} /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
