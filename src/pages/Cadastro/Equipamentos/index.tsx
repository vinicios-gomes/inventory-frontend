/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { useAuth } from '../../../hooks/auth';
import { useToast } from '../../../hooks/toast';
import Header from '../../../components/Header';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  Content,
  SectionForm,
  ImageForm,
  Formulario,
} from './styles';

interface CadastroFormData {
  patrimonio: number;
  garantia?: Date;
  serial_number?: string;
  tipo_item?: string;
  modelo?: string;
  status?: 'operacional' | 'nao operacional';
  entidade?: 'alugado' | 'proprio';
  sinal?: string;
  id_item?: string;
  fornecedor_id?: string;
  obs?: string;
}

const Equipamentos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [imagePath, SetImagePath] = useState('');
  const token = localStorage.getItem('@ivnt:token');

  const handleSubmit = useCallback(
    async (data: CadastroFormData) => {
      try {
        const response = await api.post(
          '/equipamentos',
          {
            patrimonio: data.patrimonio,
            garantia: data.garantia,
            serial_number: data.serial_number,
            tipo_item: data.tipo_item,
            modelo: data.modelo,
            status: data.status,
            entidade: data.entidade,
            sinal: data.sinal,
            id_item: data.id_item,
            fornecedor_id: data.fornecedor_id,
            obs: data.obs,
          },
          {
            headers: {
              token,
            },
          },
        );
      } catch (err) {
        console.log(err);
      }
    },
    [token],
  );
  return (
    <Container>
      <Header />
      <Content>
        <SectionForm>
          <Formulario>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="patrimonio" placeholder="Patrimonio" type="text" />
              <Input name="garantia" type="text" placeholder="Garantia" />
              <Input
                name="serial_number"
                type="text"
                placeholder="Numero de Serie"
              />
              <Input name="tipo_item" type="text" placeholder="Tipo do item" />
              <Input name="modelo" type="text" placeholder="Modelo" />
              <Input name="status" type="text" placeholder="Status" />
              <Input name="entidade" type="text" placeholder="Entidade" />
              <Input name="sinal" type="text" placeholder="Sinal" />
              <Input name="id_item" type="text" placeholder="ID do item" />
              <Input
                name="fornecedor_id"
                type="text"
                placeholder="Fornecedor"
              />
              <Input name="obs" type="text" placeholder="Observação" />
              <Button type="submit">Cadastrar</Button>
            </Form>
          </Formulario>
          <ImageForm>
            <img src={imagePath} alt="" />
            <Button type="submit">Upload image</Button>
          </ImageForm>
        </SectionForm>
      </Content>
    </Container>
  );
};

export default Equipamentos;
