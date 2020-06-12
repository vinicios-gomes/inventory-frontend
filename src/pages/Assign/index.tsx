import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useToast } from '../../hooks/toast';

import { Container, Content, Form } from './styles';

interface AssignFormData {
  patrimonio: string;
  matricula: string;
}

const Assign: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: AssignFormData) => {
      try {
        await api.post('/assign', {
          matricula: data.matricula,
          patrimonio: data.patrimonio,
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Entregue',
          description: 'O Equipamento foi entregue ao colaborador',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na entrega do equipamento.',
          description:
            'Desculpe, mas ocorreu um erro ao entregar o equipamento ao colaborador.',
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
          <Input type="text" name="matricula" placeholder="Matricula" />

          <Button type="submit">Atribuir</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Assign;
