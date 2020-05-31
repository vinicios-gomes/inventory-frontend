import React from 'react';

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />

        <form>
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
        </form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
