import React from 'react';

import userAddOutlined from '@iconify/icons-ant-design/user-add-outlined';
import enterpriseIcon from '@iconify/icons-carbon/enterprise';
import stockIcon from '@iconify/icons-vaadin/stock';

import Header from '../../components/Header';

import Card from '../../components/Cards';

import { Container, Content } from './styles';

const List: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card
          icone={enterpriseIcon}
          label="Fornecedores"
          link="/list/fornecedores"
        />
        <Card icone={userAddOutlined} label="Usuarios" link="/list/usuarios" />
        <Card label="Equipamentos" icone={stockIcon} link="/equipamentos" />
      </Content>
    </Container>
  );
};

export default List;
