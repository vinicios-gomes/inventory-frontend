import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Lista from '../../components/Lista';
import { Container, Content } from './styles';

const ListEquipamentos: React.FC = () => {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([
    { title: 'Patrimonio', field: 'patrimonio', type: undefined },
    { title: 'ID Item', field: 'id_item', type: undefined },
    { title: 'Tipo', field: 'tipo_item', type: undefined },
    { title: 'Modelo', field: 'modelo', type: undefined },
    { title: 'S/N', field: 'serial_number', type: undefined },
    { title: 'Status', field: 'status', type: undefined },
    { title: 'Entidade', field: 'entidade', type: undefined },
    { title: 'Sinal', field: 'sinal', type: undefined },
    { title: 'Fornecedor', field: 'fornecedor.nome', type: undefined },
    {
      title: 'Fornecedor CNPJ',
      field: 'fornecedor.cnpj',
      type: undefined,
    },
    { title: 'Observação', field: 'obs', type: undefined },
  ]);

  useEffect(() => {
    async function CarregarDados() {
      const response = await api.get('/equipamentos');
      setData(response.data);
    }
    CarregarDados();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Lista data={data} />
      </Content>
    </Container>
  );
};

export default ListEquipamentos;
