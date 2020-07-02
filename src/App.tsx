import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Register />
    </>
  );
};

export default App;
