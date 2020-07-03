import React, { createContext } from 'react';

interface AuthContextFormat {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

const AuthContext = createContext<AuthContextFormat>({} as AuthContextFormat);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          name: 'bruno',
          email: 'bruno@bruno.com',
        },
        token: 'sadhfas',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
