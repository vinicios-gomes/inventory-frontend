import React from 'react';

import { CadastroFormData } from '../../pages/Cadastro/Equipamentos';

import { Container, Table } from './styles';

interface ListaDTO {
  data: CadastroFormData[];
}

const Lista: React.FC<ListaDTO> = ({ data }) => {
  const column = [
    { title: 'Patrimonio', field: 'patrimonio', type: undefined },
    { title: 'ID Item', field: 'id_item', type: undefined },
    { title: 'Tipo', field: 'tipo_item', type: undefined },
    { title: 'Modelo', field: 'modelo', type: undefined },
    { title: 'S/N', field: 'serial_number', type: undefined },
    { title: 'Status', field: 'status', type: undefined },
    { title: 'Entidade', field: 'entidade', type: undefined },
    { title: 'Sinal', field: 'sinal', type: undefined },
    { title: 'Fornecedor', field: 'fornecedor.nome', type: undefined },
    {
      title: 'Fornecedor CNPJ',
      field: 'fornecedor.cnpj',
      type: undefined,
    },
    { title: 'Observação', field: 'obs', type: undefined },
  ];
  return (
    <Container>
      <Table
        title="Equipamentos"
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
