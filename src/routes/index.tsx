import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Board from '../pages/Board';
import Radios from '../pages/Radios';
import Configuracoes from '../pages/Configuracoes';
import CadastroUsuarios from '../pages/Cadastro/Usuarios';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';
import ListEquipamentos from '../pages/ListEquipamentos';
import Equipamentos from '../pages/Cadastro/Equipamentos';
import Utilitarios from '../pages/Utilitarios';
import Fornecedor from '../pages/Cadastro/Fornecedores';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/board" component={Board} isPrivate />

    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/radios" component={Radios} isPrivate />
    <Route path="/configuracoes" component={Configuracoes} isPrivate />
    <Route path="/utils" component={Utilitarios} isPrivate />
    <Route path="/cadastro/equipamentos" component={Equipamentos} isPrivate />
    <Route path="/cadastro/usuarios" component={CadastroUsuarios} isPrivate />
    <Route path="/cadastro" exact component={Cadastro} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/equipamentos" component={ListEquipamentos} isPrivate />
    <Route path="/fornecedores" component={Fornecedor} isPrivate />
  </Switch>
);

export default Routes;
