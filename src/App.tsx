import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import ContextsProviders from './hooks';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ContextsProviders>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ContextsProviders>

      <GlobalStyle />
    </>
  );
};

export default App;
