import { uuid } from 'uuidv4';

const menus = [
  { id: uuid(), name: 'dashboard', label: 'Dashboard', link: '/' },
  {
    id: uuid(),
    name: 'equipaments',
    label: 'Equipamentos',
    link: '/equipamentos',
  },
  { id: uuid(), name: 'users', label: 'Usuarios', link: '/users' },
  {
    id: uuid(),
    name: 'collaborator',
    label: 'Colaboradores',
    link: '/collaborator',
  },
  {
    id: uuid(),
    name: 'fornecedor',
    label: 'Fornecedores',
    link: '/providers',
  },
];

export default menus;
