import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Lista from '../../components/Lista';

import { Content, Container } from './styles';

const Inventario: React.FC = () => {
  const [data, setData] = useState([]);
  const coluna = [
    { title: 'Colaborador', field: 'collaborator.name' },
    { title: 'Matricula', field: 'collaborator.matricula' },
    { title: 'Cargo', field: 'collaborator.cargo.name' },
    { title: 'Departamento', field: 'collaborator.departamento.name' },
    { title: 'Equipamento', field: 'equipamento.tipo_item' },
    { title: 'Patrimono', field: 'equipamento.patrimonio' },
    { title: 'Fornecedor', field: 'equipamento.fornecedor.name' },
  ];
  console.log(data);
  useEffect(() => {
    async function carregaDados() {
      const response = await api.get('/assign');
      setData(response.data);
    }
    carregaDados();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Lista column={coluna} data={data} title="INVENTARIO" />
      </Content>
    </Container>
  );
};

export default Inventario;
