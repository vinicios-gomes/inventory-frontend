import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Lista from '../../../components/Lista';
import { Container, Content } from './styles';

const ListFornecedores: React.FC = () => {
  const [data, setData] = useState([]);
  const column = [
    { title: 'Nome', field: 'nome', type: undefined },
    { title: 'CNPJ', field: 'cnpj', type: undefined },
    {
      title: 'Inscrição Municipal',
      field: 'inscricaomunicipal',
      type: undefined,
    },
    { title: 'Razão Social', field: 'razaosocial', type: undefined },
    { title: 'Endereço', field: 'endereco', type: undefined },
    { title: 'Estado', field: 'estado', type: undefined },
    { title: 'Municipio', field: 'municipio', type: undefined },
  ];

  useEffect(() => {
    async function CarregarDados() {
      const response = await api.get('/fornecedor');
      setData(response.data);
    }
    CarregarDados();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Lista data={data} column={column} title="Fornecedores" />
      </Content>
    </Container>
  );
};

export default ListFornecedores;
