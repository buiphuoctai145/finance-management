import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface UserData {
  username: string;
}

interface AuthContextType {
  user: UserData | null;
  signUp: (username: string, password: string) => void;
  signIn: (username: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signUp: () => {},
  signIn: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<UserData | null>(null);

  const signUp = (username: string, password: string) => {
    setUser({ username });
  };

  const signIn = (username: string, password: string) => {
    setUser({ username });
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
