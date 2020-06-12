import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Board from '../pages/Board';
import Radios from '../pages/Radios';
import Inventario from '../pages/Inventario';
import Configuracoes from '../pages/Configuracoes';
import CadastroUsuarios from '../pages/Cadastro/Usuarios';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';
import ListEquipamentos from '../pages/ListEquipamentos';
import Equipamentos from '../pages/Cadastro/Equipamentos';
import Utilitarios from '../pages/Utilitarios';
import Fornecedor from '../pages/Cadastro/Fornecedores';
import ListFornecedores from '../pages/Listas/Fornecedores';
import ListUsers from '../pages/Listas/Users';
import Listas from '../pages/Listas';
import Assign from '../pages/Assign';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/board" component={Board} isPrivate />

    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/radios" component={Radios} isPrivate />
    <Route path="/configuracoes" component={Configuracoes} isPrivate />
    <Route path="/inventario" component={Inventario} isPrivate />
    <Route path="/utils" component={Utilitarios} isPrivate />
    <Route path="/cadastro/equipamentos" component={Equipamentos} isPrivate />
    <Route path="/cadastro/usuarios" component={CadastroUsuarios} isPrivate />
    <Route path="/cadastro" exact component={Cadastro} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/equipamentos" component={ListEquipamentos} isPrivate />
    <Route path="/cadastro/fornecedores" component={Fornecedor} isPrivate />
    <Route path="/list" component={Listas} exact isPrivate />
    <Route path="/list/fornecedores" component={ListFornecedores} isPrivate />
    <Route path="/list/usuarios" component={ListUsers} isPrivate />
    <Route path="/assign" component={Assign} isPrivate />
  </Switch>
);

export default Routes;
