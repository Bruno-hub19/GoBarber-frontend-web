import React from 'react';

import ContextsProviders from './hooks';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
      <ContextsProviders>
        <SignIn />
      </ContextsProviders>

      <GlobalStyle />
    </>
  );
};

export default App;
