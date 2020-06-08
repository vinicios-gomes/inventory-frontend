import React, { useCallback } from 'react';
import { Form } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Header from '../../components/Header';

import { Container, Content, SectionForm, ImageForm } from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const handleSubmit = useCallback(() => {}, []);
  return (
    <Container>
      <Header />
      <Content>
        <SectionForm>
          <Form initialData={user} onSubmit={handleSubmit}>
            <p>Login</p>
            <Input name="login" type="text" />
            <p>Nome</p>
            <Input name="name" type="text" />
            <p>Senha</p>
            <Input name="password" type="password" />
            <Button>Atualizar</Button>
          </Form>
        </SectionForm>
        <ImageForm>
          <p>Foto</p>
          <img
            src="https://avatars0.githubusercontent.com/u/39882671?s=460&u=9347b2040c29a7caf8afb20963a2ada334fcd588&v=4"
            alt="Vinicios Gomes"
          />
          <Button>Upload image</Button>
        </ImageForm>
      </Content>
    </Container>
  );
};

export default Profile;
