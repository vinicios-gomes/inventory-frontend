import React, { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Content, Charts } from './styles';

const Dashboard: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function carregaDados() {
      const response = await api.get('/equipamentos');
      setData(response.data);
    }
    carregaDados();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Dashboard</h1>
        <Charts>
          <LineChart width={850} height={600} data={data}>
            <Line type="monotone" dataKey="modelo" stroke="#fff" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="modelo" />
            <YAxis />
          </LineChart>

          <LineChart width={850} height={600} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#fff" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </Charts>
      </Content>
    </Container>
  );
};

export default Dashboard;
