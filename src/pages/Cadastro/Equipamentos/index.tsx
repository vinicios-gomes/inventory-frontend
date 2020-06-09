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
  patrimonio: string;
  garantia?: Date;
  serial_number?: string;
  tipo_item?: string;
  modelo?: string;
  status?: 'operacional' | 'nao operacional';
  entidade?: 'alugado' | 'proprio';
  sinal?: 'digital' | 'analogico';
  id_item?: string;
  fornecedor_id?: string;
  obs?: string;
}

const Equipamentos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: CadastroFormData) => {
      try {
        await api.post('/equipamentos', {
          patrimonio: data.patrimonio,
          garantia: new Date(),
          serial_number: data.serial_number,
          tipo_item: data.tipo_item,
          modelo: data.modelo,
          status: data.status,
          entidade: data.entidade,
          sinal: data.sinal,
          id_item: data.id_item,
          fornecedor_id: data.fornecedor_id,
          obs: data.obs,
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
          title: 'Erro no cadastro',
          description:
            'desculpe, mas ocorreu um erro ao cadastrar o equipamento.',
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
          <Input type="text" name="patrimonio" placeholder="Patrimonio" />
          <Input type="text" name="garantia" placeholder="Garantia" />
          <Input
            type="text"
            name="serial_number"
            placeholder="Numero de Seria"
          />
          <Input type="text" name="tipo_item" placeholder="Tipo do item" />
          <Input type="text" name="modelo" placeholder="Modelo" />
          <Input
            type="text"
            name="status"
            placeholder="Status: OPERACIONAL OU NAO OPERACIOANL"
          />
          <Input
            type="text"
            name="entidade"
            placeholder="Entidade: Alugado ou Proprio"
          />
          <Input
            type="text"
            name="sinal"
            placeholder="Sinal: Digital ou Analogico"
          />
          <Input type="text" name="id_item" placeholder="ID do radio" />
          <Input
            type="text"
            name="fornecedor_id"
            placeholder="CNPJ do fornecedor"
          />
          <Input type="text" name="obs" placeholder="Observações" />
          <Button type="submit">OK</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Equipamentos;
