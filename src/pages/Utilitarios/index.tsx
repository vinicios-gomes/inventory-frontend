import React from 'react';
import gearIcon from '@iconify/icons-noto-v1/gear';
import Header from '../../components/Header';
import Card from '../../components/Cards';
import { Container, Content } from './styles';

const Configuracoes: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Card icone={gearIcon} label="Cadastro" link="/cadastro" />
        <Card
          icone={gearIcon}
          label="Configurações"
          disable
          link="/configuracoes"
        />
      </Content>
    </Container>
  );
};

export default Configuracoes;
