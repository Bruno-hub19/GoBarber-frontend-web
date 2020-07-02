import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logoSvg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSvg} alt="GoBaber logo" />

        <form>
          <h1>Faça seu Cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/login">
          <FiArrowLeft size={16} /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default Register;
