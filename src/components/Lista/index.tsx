import React from 'react';
import MaterialTable, { Column } from 'material-table';

// import api from '../../services/api';
import { CadastroFormData } from '../../pages/Cadastro/Equipamentos';

import { Container } from './styles';

interface ListaDTO {
  data: CadastroFormData[];
}

const Lista: React.FC<ListaDTO> = ({ data, children }) => {
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
      <MaterialTable
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
