import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Lista from '../../../components/Lista';
import { Container, Content } from './styles';

const ListUsers: React.FC = () => {
  const [data, setData] = useState([]);

  const column = [
    { title: 'Nome', field: 'name', type: undefined },
    { title: 'Login', field: 'login', type: undefined },
    { title: 'Email', field: 'email', type: undefined },
  ];

  useEffect(() => {
    async function CarregarDados() {
      const response = await api.get('/users');
      setData(response.data);
    }
    CarregarDados();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Lista title="Users" column={column} data={data} />
      </Content>
    </Container>
  );
};

export default ListUsers;
