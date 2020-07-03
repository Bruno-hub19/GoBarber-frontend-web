import React from 'react';

import { AuthProvider } from './contexts/AuthContext';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default App;
