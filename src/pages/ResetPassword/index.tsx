import React, { useCallback, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import queryString from 'query-string';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logoSvg from '../../assets/logo.svg';
import { Container, Content, AnimatedContainer, Background } from './styles';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
  token: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { search } = useLocation();
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const { token } = queryString.parse(search);

        const schema = Yup.object().shape({
          password: Yup.string().required('Este campo é obrigatório'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'As senhas precisam ser iguais')
            .required('Este campo é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/reset', {
          token,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });

        addToast({
          type: 'success',
          title: 'Sucesso',
          description:
            'Nova senha definida com sucesso. Faça o logon para testar',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Verifique os dados informados',
        });
      }
    },
    [addToast, history, search],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={logoSvg} alt="GoBaber logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resete sua senha</h1>

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Digite sua nova senha"
            />
            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirme sua senha"
            />
            <Button type="submit">Resetar senha</Button>
          </Form>

          <Link to="/">
            <FiLogIn size={16} /> Ir para logon
          </Link>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export { ResetPassword };
