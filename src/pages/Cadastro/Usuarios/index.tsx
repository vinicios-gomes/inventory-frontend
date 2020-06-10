/* eslint-disable @typescript-eslint/camelcase */

import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { useToast } from '../../../hooks/toast';

import { Container, Content, Form } from '../Fornecedores/styles';

export interface CadastroFormData {
  name: string;
  login: string;
  email: string;
  password: string;
  provider: string;
}

const Fornecedores: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: CadastroFormData) => {
      try {
        await api.post('/users', {
          name: data.name,
          login: data.login,
          email: data.email,
          password: data.password,
          provider: data.provider,
        });

        history.push('/');
        addToast({
          type: 'success',
          title: 'Cadastrado!',
          description: 'Os dados foram inseridos no banco de dados.',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro no cadastro do usuario',
          description:
            'Desculpe, mas ocorreu um erro ao cadastrar um novo usuario.',
        });
        console.log(err);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nome do usuario" />
          <Input type="text" name="login" placeholder="Login do usuario" />
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="password" />
          <Button type="submit">OK</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Fornecedores;
