import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { FiMail, FiLock } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        login: Yup.string().required('O login é obrigatorio.'),
        password: Yup.string().min(6, 'Minimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            icon={FiMail}
            name="login"
            type="text"
            placeholder="Digite seu login"
          />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
