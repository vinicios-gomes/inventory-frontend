import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import { Container, Header, HeaderContent, Profile } from './styles';

interface MenuProps {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="inventario" />

          <Profile>
            <img
              src="https://avatars0.githubusercontent.com/u/39882671?s=460&u=9347b2040c29a7caf8afb20963a2ada334fcd588&v=4"
              alt="Vinicios Gomes"
            />
            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};
export default Dashboard;
