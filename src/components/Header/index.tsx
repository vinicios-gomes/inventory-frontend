import React from 'react';

import { useHistory, Link } from 'react-router-dom';

import { FiPower, FiArrowLeftCircle } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import { HeaderContainer, HeaderContent, Profile } from './styles';

interface MenuProps {
  id: string;
  name: string;
}
const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const history = useHistory();

  return (
    <HeaderContainer>
      <button type="button" onClick={() => history.goBack()}>
        <FiArrowLeftCircle size={24} />
      </button>
      <HeaderContent>
        <Link to="/">
          <img src={logoImg} alt="inventario" />
        </Link>

        <Profile>
          <img
            src="https://avatars0.githubusercontent.com/u/39882671?s=460&u=9347b2040c29a7caf8afb20963a2ada334fcd588&v=4"
            alt="Vinicios Gomes"
          />
          <div>
            <span>Bem-vindo</span>
            <strong>
              <Link to="/profile">{user.name}</Link>
            </strong>
          </div>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </Profile>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
