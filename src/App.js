import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import Store from './store';

function App() {
  return (
    <Store>
      <Routes />
      <GlobalStyles />
    </Store>
  );
}

export default App;
