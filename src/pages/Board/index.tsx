import React from 'react';

import monitorDashboard from '@iconify/icons-mdi/monitor-dashboard';
import gearIcon from '@iconify/icons-noto-v1/gear';
import userOutlined from '@iconify/icons-ant-design/user-outlined';
import stockIcon from '@iconify/icons-vaadin/stock';
import Header from '../../components/Header';

import Card from '../../components/Cards';

import { Container, Content } from './styles';

const Board: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Card
          label="Dashboard"
          disable
          icone={monitorDashboard}
          link="/dashboard"
        />
        <Card label="Equipamentos" icone={stockIcon} link="/equipamentos" />
        <Card
          label="Colaboradores"
          disable
          icone={userOutlined}
          link="/usuarios"
        />
        <Card label="Utilitarios" icone={gearIcon} link="/utils" />
      </Content>
    </Container>
  );
};
export default Board;
