import React, { useCallback } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Form } from './styles';

const Configuracoes: React.FC = () => {
  const handleForm = useCallback(() => {}, []);

  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleForm}>
          <Input type="text" name="enderecoapi" />
          <Button>Atualizar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Configuracoes;
