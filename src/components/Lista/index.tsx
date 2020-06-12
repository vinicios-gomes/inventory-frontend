import React from 'react';

import { Container, Table } from './styles';

interface ListaDTO {
  title: string;
  data: Record<string, any>[];
  column: Record<string, any>[];
}

const Lista: React.FC<ListaDTO> = ({ data, title, column }) => {
  return (
    <Container>
      <Table
        title={title}
        columns={column}
        data={data}
        options={{
          exportButton: true,
        }}
      />
    </Container>
  );
};

export default Lista;
