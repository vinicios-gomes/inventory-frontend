/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
import api from '../services/api';

interface CadastroFormData {
  patrimonio: number;
  garantia?: Date;
  serial_number?: string;
  tipo_item?: string;
  modelo?: string;
  status?: 'operacional' | 'nao operacional';
  entidade?: 'alugado' | 'proprio';
  sinal?: string;
  id_item?: string;
  fornecedor_id?: string;
  obs?: string;
}

async function Cadastro({
  patrimonio,
  garantia,
  serial_number,
  tipo_item,
  entidade,
  fornecedor_id,
  id_item,
  modelo,
  obs,
  sinal,
  status,
}: CadastroFormData) {
  const response = await api.post('/equipamentos', {
    patrimonio,
    garantia,
    serial_number,
    tipo_item,
    entidade,
    fornecedor_id,
    id_item,
    modelo,
    obs,
    sinal,
    status,
  });
  return response.data;
}
export default Cadastro;
