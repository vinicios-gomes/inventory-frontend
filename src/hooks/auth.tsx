import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
}

interface SignInCredentials {
  login: string;
  password: string;
}
interface Auth {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<Auth>({} as Auth);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ivnt:token');
    const user = localStorage.getItem('@ivnt:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('/sessions', {
      login,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@ivnt:token', token);
    localStorage.setItem('@ivnt:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ivnt:token');
    localStorage.removeItem('@ivnt:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): Auth {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
