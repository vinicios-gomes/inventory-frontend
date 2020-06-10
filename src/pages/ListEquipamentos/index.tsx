import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Lista from '../../components/Lista';
import { Container, Content } from './styles';

const ListEquipamentos: React.FC = () => {
  const [data, setData] = useState([]);

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
