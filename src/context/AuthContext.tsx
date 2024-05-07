import { useLocalStorage } from '@/hooks/useLocalStorage';
import { IUser } from '@/types/IUser';
import { Context, createContext, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthContextType = {
  token: string;
  user: IUser | null;
  setAccessToken: (token: string) => void;
  setCurrentUser: (user: IUser) => void;
};

const initialState: AuthContextType = {
  token: '',
  user: null,
  setAccessToken: () => undefined,
  setCurrentUser: () => undefined,
};

export const AuthContext: Context<AuthContextType> = createContext<AuthContextType>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const { get } = useLocalStorage();

  const [token, setToken] = useState<string>(get('access_token') || '');
  const [user, setUser] = useState<IUser | null>(null);

  function setAccessToken(token: string) {
    setToken(token || '');
  }

  function setCurrentUser(user: IUser) {
    setUser(user);
  }

  const provider = {
    token,
    user,
    setAccessToken,
    setCurrentUser,
  };

  return <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>;
}
