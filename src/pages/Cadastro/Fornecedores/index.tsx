/* eslint-disable @typescript-eslint/camelcase */

import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { useToast } from '../../../hooks/toast';

import { Container, Content, Form } from './styles';

export interface CadastroFormData {
  nome: string;
  cnpj: number;
  inscricaomunicipal: number;
  razaosocial: string;
  endereco: string;
  estado: string;
  municipio: string;
}

const Fornecedores: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: CadastroFormData) => {
      try {
        await api.post('/fornecedor', {
          nome: data.nome,
          cnpj: data.cnpj,
          inscricaomunicipal: data.inscricaomunicipal,
          razaosocial: data.razaosocial,
          endereco: data.endereco,
          estado: data.estado,
          municipio: data.municipio,
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
          title: 'Erro no cadastro do fornecedor',
          description:
            'Desculpe, mas ocorreu um erro ao cadastrar um novo fornecedor.',
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
          <Input type="text" name="nome" placeholder="Nome da empresa" />
          <Input type="text" name="cnpj" placeholder="CNPJ" />
          <Input
            type="text"
            name="inscricaomunicipal"
            placeholder="Inscrição Municipal"
          />
          <Input type="text" name="razaosocial" placeholder="Razão Social" />
          <Input
            type="text"
            name="endereco"
            placeholder="Endereço: Rua, N, Bairro"
          />
          <Input type="text" name="estado" placeholder="Estado" />
          <Input type="text" name="municipio" placeholder="Municipio" />

          <Button type="submit">OK</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Fornecedores;
