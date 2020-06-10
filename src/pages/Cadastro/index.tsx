import React from 'react';
import radioIcon from '@iconify/icons-mdi/radio-handheld';
import userAddOutlined from '@iconify/icons-ant-design/user-add-outlined';
import enterpriseIcon from '@iconify/icons-carbon/enterprise';
import Header from '../../components/Header';
import Card from '../../components/Cards';

import { Container, Content } from './styles';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Card
          icone={radioIcon}
          label="Equipamentos"
          link="/cadastro/equipamentos"
        />
        <Card
          icone={enterpriseIcon}
          label="Fornecedores"
          link="/cadastro/fornecedores"
        />
        <Card
          icone={userAddOutlined}
          label="Usuarios"
          link="/cadastro/usuarios"
        />
      </Content>
    </Container>
  );
};

export default Cadastro;
