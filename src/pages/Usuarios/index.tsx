import React from 'react';

import Header from '../../components/Header';

import { Container, Content, List, Show } from './styles';

const Usuarios: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <List>
          <h1>se</h1>
        </List>
        <Show>
          <h1>ok</h1>
        </Show>
      </Content>
    </Container>
  );
};

export default Usuarios;
